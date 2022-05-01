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

const handleMinigame = ({ data, actorId, result, states, changedProperties }) => {
  const volume = states.volumes[states.gameState.volumeId];
  let minigame = states.minigames[actorId];

  if (!minigame) {
    minigame = {
      statsUpdates: [],
      roundHistory: [],
    };

    states.minigames[actorId] = minigame;
    result.gameData.minigames.push(minigame);
    states.gameState.minigameactorId = actorId;
  }

  if (data.CurrentState && data.CurrentState === 'PostGameTimeDilation') {
    const teams = {};
    const teamsResult = {};

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
        roundStats: writePropertiesRecursive([], volume.stats.roundStats.playerStats.find(({Player}) => Player === player.UniqueId)?.stats || {}),
      };

      if (!teamsResult[player.TeamIndex]) {
        teamsResult[player.TeamIndex] = team;
      }
    });

    minigame.roundHistory.push(teamsResult);
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
};

module.exports = handleMinigame;
