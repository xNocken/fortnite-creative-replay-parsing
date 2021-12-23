const handlePlayerState = ({ data, chIndex, result, states, changedProperties }) => {
  let playerData = states.players[chIndex];

  if (!playerData) {
    playerData = {};

    states.players[chIndex] = playerData;
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

  if (data.Ping) {
    states.performances.pings.push(data.Ping);
  }
};

module.exports = handlePlayerState;
