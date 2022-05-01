const handleVolume = ({ data, actorId, states, result, changedProperties }) => {
  let volume = states.volumes[actorId];

  if (!volume) {
    volume = {
      stats: {
        roundStats: {
          groupStats: [],
          playerStats: [],
          bucketStats: [],
        },
        gameStats: {
          groupStats: [],
          playerStats: [],
          bucketStats: [],
        },
      },
      mapInfos: {},
    };

    states.gameState.volumeId = actorId;
    states.volumes[actorId] = volume;
    result.gameData.volumes.push(volume);
  }

  for (let i = 0; i < changedProperties.length; i++) {
    const key = changedProperties[i];

    volume[key] = data[key];
  }
};

module.exports = handleVolume;
