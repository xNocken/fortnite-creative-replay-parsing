const handleMinigame = require("./propertyExports/handleMinigame");
const handleSaveComponent = require("./propertyExports/handleSaveComponent");
const handlePlayerState = require("./propertyExports/handlePlayerState");
const handleGameState = require("./propertyExports/handleGameState");

const setListener = ({ propertyExportEmitter }) => {
  propertyExportEmitter.on('Athena_GameState.Athena_GameState_C', handleGameState);
  propertyExportEmitter.on('Minigame_PlayerCreated.Minigame_PlayerCreated_C', handleMinigame);
  propertyExportEmitter.on('FortniteGame.FortLevelSaveComponent', handleSaveComponent);
  propertyExportEmitter.on('FortniteGame.FortPlayerStateAthena', handlePlayerState);
};

module.exports = setListener;
