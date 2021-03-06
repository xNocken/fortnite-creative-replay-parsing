const handleGameState = ({ data, result, states, timeSeconds, changedProperties }) => {
  if (!states.gameState.inited) {
    result.gameData.gameState = states.gameState;

    states.gameState.inited = true;
    states.gameState.ingameToReplayTimeDiff = data.ReplicatedWorldTimeSeconds - timeSeconds;
  }

  for (let i = 0; i < changedProperties.length; i += 1) {
    const key = changedProperties[i];

    states.gameState[key] = data[key];
  }

  if (states.gameState.RecorderPlayerState && !states.gameState.ownerFound) {
    const player = states.players[states.gameState.RecorderPlayerState];

    if (player) {
      player.isRecorder = true;
      states.gameState.ownerFound = true;
    }
  }
};

module.exports = handleGameState;
