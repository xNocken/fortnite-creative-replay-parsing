let handlesDone = false;
const startingHandles = {};

const todoName = (data, handle, result) => {
  if (data.Player) {
    result.Player = data.Player;
  }

  if (data.BucketIndex !== undefined) {
    result.BucketIndex = data.BucketIndex;
  }

  if (data[handle]) {
    data[handle].forEach((statData, statIndex) => {
      if (!statData) {
        return;
      }

      if (!result.stats[statIndex]) {
        result.stats[statIndex] = {};
      }

      Object.entries(statData).forEach(([key, value]) => {
        result.stats[statIndex][key] = value;
      });
    });
  }
}

const updateData = (handles, data, result, roundStats) => {
  const statsHandle = handles.stats;
  const playerStatsHandle = handles.playerStats;
  const bucketStatsHandle = handles.bucketStats;

  if (data[statsHandle]) {
    const stats = data[statsHandle];

    stats.forEach((theData, index) => {
      if (!theData) {
        return;
      }

      if (!result.groupStats[index]) {
        result.groupStats[index] = {};
      }

      Object.entries(theData).forEach(([key, value]) => {
        result.groupStats[index][key] = value;
      });
    });
  }

  if (data[playerStatsHandle]) {
    const stats = data[playerStatsHandle];

    stats.forEach((theData, index) => {
      if (!theData) {
        return;
      }

      if (!result.playerStats[index]) {
        result.playerStats[index] = {
          stats: [],
        };
      }

      if (theData.Player && roundStats) {
        roundStats.playerStats[index].Player = theData.Player;
      }

      todoName(theData, playerStatsHandle + 1, result.playerStats[index]);
    });
  }

  if (data[bucketStatsHandle]) {
    const stats = data[bucketStatsHandle];

    stats.forEach((theData, index) => {
      if (!theData) {
        return;
      }

      if (!result.bucketStats[index]) {
        result.bucketStats[index] = {
          stats: [],
        };
      }

      todoName(theData, bucketStatsHandle + 1, result.bucketStats[index]);
    });
  }
}

const handleMinigameStatsComponent = ({ data, actorId, states, netFieldExports }) => {
  const volume = states.volumes[actorId];

  if (!volume) {
    return;
  }

  if (data.LoadedStats) {
    volume.stats.LoadedStats = data.LoadedStats;
  }

  if (data.TrackedStatObjects) {
    volume.stats.TrackedStatObjects = data.TrackedStatObjects;
  }

  if (data.ScoreboardStatObjects) {
    volume.stats.ScoreboardStatObjects = data.ScoreboardStatObjects;
  }

  if (data.PersistentStatList) {
    volume.stats.PersistentStatList = data.PersistentStatList;
  }

  if (data.ScoreboardColumnOrder) {
    volume.stats.ScoreboardColumnOrder = data.ScoreboardColumnOrder;
  }

  if (data.StatNamesInUse) {
    volume.stats.StatNamesInUse = data.StatNamesInUse;
  }

  if (!handlesDone) {
    const playerStatsHandles = Object.values(netFieldExports).filter(({ name }) => name === 'PlayerStats');

    if (playerStatsHandles.length === 1) {
      startingHandles.roundStats = {
        stats: playerStatsHandles[0] - 4,
        playerStats: playerStatsHandles[0],
        bucketStats: playerStatsHandles[0] + 7,
      };
    }

    if (playerStatsHandles.length === 2) {
      startingHandles.roundStats = {
        stats: playerStatsHandles[0].handle - 4,
        playerStats: playerStatsHandles[0].handle,
        bucketStats: playerStatsHandles[0].handle + 7,
      };

      startingHandles.gameStats = {
        stats: playerStatsHandles[1].handle - 4,
        playerStats: playerStatsHandles[1].handle,
        bucketStats: playerStatsHandles[1].handle + 7,
      };

      handlesDone = true;
    }
  }

  if (startingHandles.roundStats) {
    updateData(startingHandles.roundStats, data, volume.stats.roundStats);
  }

  if (startingHandles.gameStats) {
    updateData(startingHandles.gameStats, data, volume.stats.gameStats, volume.stats.roundStats);
  }
}

module.exports = handleMinigameStatsComponent;
