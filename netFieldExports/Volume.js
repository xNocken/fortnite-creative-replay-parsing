module.exports = {
  path: [
    '/Game/Athena/BuildingActors/BP_FortVolumeDirectMatch_MMS.BP_FortVolumeDirectMatch_MMS_C',
    '/Game/Athena/BuildingActors/BP_FortVolumeDirectMatch.BP_FortVolumeDirectMatch_C',
  ],
  staticActorIds: [
    'BP_FortVolumeDirectMatch_MMS',
    'BP_FortVolumeDirectMatch',
  ],
  exportType: 'array',
  exportName: 'volumes',
  customExportName: 'volume',
  exportGroup: 'gameData',
  properties: {
    CurrentPlayset: {
      parseType: 'readClass',
      type: 'ItemDefinition',
    },
  }
}
