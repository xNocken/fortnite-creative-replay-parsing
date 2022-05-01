const handleSaveComponent = ({ data, actorId, result, states, changedProperties }) => {
  const volume = states.volumes[actorId];

  for (let i = 0; i < changedProperties.length; i += 1) {
    const key = changedProperties[i];

    volume.mapInfos[key] = data[key];
  }
};

module.exports = handleSaveComponent;
