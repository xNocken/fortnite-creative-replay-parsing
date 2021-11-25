const { DebugObject } = require("../../classes");

const writePropertiesRecursive = (old, neww) => {
  Object.entries(neww).forEach(([key, val]) => {
    if (((typeof val === 'object' && val !== null) || Array.isArray(val)) && !(val instanceof DebugObject)) {
      if (!old[key]) {
        old[key] = Array.isArray(val) ? [] : {};
      }

      if (val.toJSON) {
        old[key] = val.toJSON();

        return;
      }

      writePropertiesRecursive(old[key], val);
    } else {
      old[key] = val;
    }
  });

  return old;
}

const indexToPlayer = [];
const indexToPlayerRound = [];
const indexToStat = {};
const indexToStatRound = {};
const unresolvedPlayerQueue = [];

const handleMinigame = ({ data, chIndex, result, states, changedProperties }) => {
  let minigame = states.minigames[chIndex];

  if (!minigame) {
    minigame = {
      statsUpdates: [],
      roundHistory: [],
    };

    states.minigames[chIndex] = minigame;
    result.gameData.minigames.push(minigame);
    states.gameState.minigameChIndex = chIndex;
  }

  if (data.CurrentState && data.CurrentState === 'PostGameTimeDilation') {
    const teams = {};

    minigame.TeamArray.forEach((team, index) => {
      if (team.winCount === undefined) {
        team.winCount = 0;
      }

      const teamCopy = writePropertiesRecursive({}, team);

      teams[team.TeamIndex] = teamCopy;

      teamCopy.players = {};

      if (index === data.RoundWinHistory.slice(-1)[0]) {
        team.winCount += 1;
        teamCopy.winCount += 1;
        teamCopy.roundWon = true;
      } else {
        teamCopy.roundWon = false;
      }
    });

    result.gameData.players.forEach((player) => {
      if (!player.TeamIndex || player.bIsDisconnected) {
        return;
      }

      const team = teams[player.TeamIndex];

      team.players[player.UniqueId] = {
        ...player,
        roundStats: writePropertiesRecursive({}, minigame.roundStats[player.UniqueId] || {}),
      };
    });

    minigame.roundHistory.push(teams);
  }

  for (let i = 0; i < changedProperties.length; i += 1) {
    const key = changedProperties[i];

    if (typeof data[key] === 'object' || Array.isArray(data[key])) {
      continue;
    }

    minigame[key] = data[key];
  }

  if (data.TeamArray) {
    if (!minigame.TeamArray) {
      minigame.TeamArray = [];
    }

    writePropertiesRecursive(minigame.TeamArray, data.TeamArray);
  }

  if (data.ClassSlotArray) {
    if (!minigame.ClassSlotArray) {
      minigame.ClassSlotArray = [];
    }

    writePropertiesRecursive(minigame.ClassSlotArray, data.ClassSlotArray);
  }

  if (data.TrackedStats) {
    if (!minigame.TrackedStats) {
      minigame.TrackedStats = [];
    }

    writePropertiesRecursive(minigame.TrackedStats, data.TrackedStats);
  }

  if (data.ScoreboardStats) {
    if (!minigame.ScoreboardStats) {
      minigame.ScoreboardStats = [];
    }

    writePropertiesRecursive(minigame.ScoreboardStats, data.ScoreboardStats);
  }

  if (data.PlayerStats) {
    // minigame.statsUpdates.push([minigame.CurrentState, data.PlayerStats]);
    let currentStats;
    let currentIndexToPlayer;
    let currentIndexToStat;

    const isPostGame = minigame.CurrentState === 'PostGameTimeDilation';
    const isInProgress = minigame.CurrentState === 'InProgress';
    const isMyGuder = data.PlayerStats.every(({ Player }) => Player);
    const hasTotalStats = minigame.stats;

    if (isPostGame || (!hasTotalStats && isMyGuder && isInProgress)) {
      if (!hasTotalStats) {
        minigame.stats = {};
      }

      currentIndexToPlayer = indexToPlayer;
      currentIndexToStat = indexToStat;
      currentStats = minigame.stats;
    } else {
      if (!minigame.roundStats) {
        minigame.roundStats = {};
      }

      currentIndexToPlayer = indexToPlayerRound;
      currentIndexToStat = indexToStatRound;
      currentStats = minigame.roundStats;
    }

    data.PlayerStats.forEach(({ Stats, Player }, playerIndex) => {
      let player = currentIndexToPlayer[playerIndex];

      if (!player) {
        currentIndexToPlayer[playerIndex] = Player;
        player = Player;
      }

      if (!player) {
        if (!unresolvedPlayerQueue[playerIndex]) {
          unresolvedPlayerQueue[playerIndex] = [];
        }

        unresolvedPlayerQueue[playerIndex].push(Stats);

        return;
      }


      if (!currentStats[player]) {
        currentStats[player] = {};
      }

      if (!currentIndexToStat[player]) {
        currentIndexToStat[player] = [];
      }

      const loopHandler = ({ Filter, Count }, statIndex) => {
        let statName;

        if (Filter) {
          statName = Filter.name;
          currentIndexToStat[player][statIndex] = statName;
        } else {
          statName = currentIndexToStat[player][statIndex];
        }

        currentStats[player][statName] = Count;
      };

      if (unresolvedPlayerQueue[playerIndex]) {
        unresolvedPlayerQueue[playerIndex].forEach((stats) => {
          stats.forEach(loopHandler);
        });
      }

      Stats.forEach(loopHandler);
    });
  }
};

module.exports = handleMinigame;
