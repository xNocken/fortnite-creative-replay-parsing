const handleMinigame = require("./propertyExports/handleMinigame");
const handleSaveComponent = require("./propertyExports/handleSaveComponent");
const handlePlayerState = require("./propertyExports/handlePlayerState");
const handleGameState = require("./propertyExports/handleGameState");
const handleNextFrame = require("./handleNextFrame");
const handleMinigameStatsComponent = require('./propertyExports/handleMinigameStatsComponent');
const handleVolume = require('./propertyExports/handleVolume');

const setListener = ({ propertyExportEmitter, parsingEmitter }) => {
  propertyExportEmitter.on('Athena_GameState.Athena_GameState_C', handleGameState);
  propertyExportEmitter.on('Minigame_PlayerCreated.Minigame_PlayerCreated_C', handleMinigame);
  propertyExportEmitter.on('FortniteGame.FortLevelSaveComponent', handleSaveComponent);
  propertyExportEmitter.on('FortniteGame.FortPlayerStateAthena', handlePlayerState);
  propertyExportEmitter.on('FortniteGame.FortMinigameStatsComponent', handleMinigameStatsComponent);
  propertyExportEmitter.on('volume', handleVolume)

  parsingEmitter.on('nextFrame', handleNextFrame);
};

module.exports = setListener;
