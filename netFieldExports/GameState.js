module.exports = {
  path: [
    "/Game/Athena/Athena_GameState.Athena_GameState_C"
  ],
  parseLevel: 1,
  exportGroup: "gameData",
  exportName: "gameState",
  exportType: "object",
  properties: {
    ReplicatedWorldTimeSeconds: {
      parseFunction: "readFloat32",
      parseType: "default"
    },
    TeamCount: {
      parseFunction: "readInt32",
      parseType: "default"
    },
    TeamSize: {
      parseFunction: "readInt32",
      parseType: "default"
    },
    GameSessionId: {
      parseFunction: "readString",
      parseType: "default"
    },
    CreativeRealEstatePlotManager: {
      parseType: "ignore"
    },
    PlayersLeft: {
      parseFunction: "readInt32",
      parseType: "default"
    },
    TeamsLeft: {
      parseFunction: "readInt32",
      parseType: "default"
    },
    UtcTimeStartedMatch: {
      type: "FDateTime",
      parseType: "readClass"
    },
    VolumeManager: {
      parseType: "default",
      parseFunction: 'readIntPacked'
    },
    MapInfo: {
      type: "ItemDefinition",
      parseType: "readClass"
    },
    RecorderPlayerState: {
      parseFunction: 'readIntPacked',
      parseType: 'default',
    },
  }
}
