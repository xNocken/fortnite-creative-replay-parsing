const handleSaveComponent = ({ data, chIndex, result, states, changedProperties }) => {
  if (!states.levelsavecomponent[chIndex]) {
    states.levelsavecomponent[chIndex] = data;
    result.gameData.levelsavecomponent.push(data);

    return;
  }

  for (let i = 0; i < changedProperties.length; i += 1) {
    const key = changedProperties[i];

    states.levelsavecomponent[chIndex][key] = data[key];
  }
};

module.exports = handleSaveComponent;
