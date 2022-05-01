const handlePlayerState = ({ data, actorId, result, states, changedProperties }) => {
  let playerData = states.players[actorId];

  if (!playerData) {
    playerData = {};

    states.players[actorId] = playerData;
    result.gameData.players.push(playerData);
  }

  for (let i = 0; i < changedProperties.length; i += 1) {
    const key = changedProperties[i];

    playerData[key] = data[key];
  }

  if (data.PlayerNamePrivate) {
    const name = data.PlayerNamePrivate;

    playerData.PlayerNamePrivate = name.split('').map((a, i) => String.fromCharCode(a.charCodeAt() + ((name.length % 4 * 3 % 8 + 1 + i) * 3 % 8))).join('')
  }

  if (data.Ping !== undefined || data.CompressedPing !== undefined) {
    states.performances.pings.push(data.Ping || data.CompressedPing);
  }
};

module.exports = handlePlayerState;
