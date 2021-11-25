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
      name: "ReplicatedWorldTimeSeconds",
      type: "float",
      parseFunction: "readFloat32",
      parseType: "default"
    },
    TeamCount: {
      name: "TeamCount",
      type: "int",
      parseFunction: "readInt32",
      parseType: "default"
    },
    TeamSize: {
      name: "TeamSize",
      type: "int",
      parseFunction: "readInt32",
      parseType: "default"
    },
    GameSessionId: {
      name: "GameSessionId",
      type: "string",
      parseFunction: "readString",
      parseType: "default"
    },
    CreativeRealEstatePlotManager: {
      name: "CreativeRealEstatePlotManager",
      type: "int",
      parseType: "ignore"
    },
    PlayersLeft: {
      name: "PlayersLeft",
      type: "int",
      parseFunction: "readInt32",
      parseType: "default"
    },
    TeamsLeft: {
      name: "TeamsLeft",
      type: "int",
      parseFunction: "readInt32",
      parseType: "default"
    },
    UtcTimeStartedMatch: {
      name: "UtcTimeStartedMatch",
      type: "FDateTime",
      parseType: "readClass"
    },
    VolumeManager: {
      name: "VolumeManager",
      type: "uint",
      parseType: "ignore"
    },
    MapInfo: {
      name: "MapInfo",
      type: "ItemDefinition",
      parseType: "readClass"
    },
    RecorderPlayerState: {
      name: 'RecorderPlayerState',
      parseFunction: 'readIntPacked',
      parseType: 'default',
    },
  }
}
