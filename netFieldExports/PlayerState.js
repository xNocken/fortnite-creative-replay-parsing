module.exports = {
  path: [
    "/Script/FortniteGame.FortPlayerStateAthena"
  ],
  parseLevel: 1,
  exportGroup: "gameData",
  exportName: "players",
  exportType: "array",
  properties: {
    PlayerID: {
      name: 'PlayerID',
      parseFunction: 'readIntPacked',
      parseType: 'default',
    },
    UniqueId: {
      name: 'UniqueId',
      parseFunction: 'readNetId',
      parseType: 'default',
    },
    PlayerNamePrivate: {
      name: 'PlayerNamePrivate',
      parseFunction: 'readString',
      parseType: 'default',
    },
    Platform: {
      name: 'Platform',
      parseFunction: 'readString',
      parseType: 'default',
    },
    TeamIndex: {
      name: 'TeamIndex',
      parseFunction: 'readBitsToInt',
      args: [7],
      parseType: 'default',
    },
    SquadId: {
      name: 'SquadId',
      parseFunction: 'readByte',
      parseType: 'default',
    },
    bIsDisconnected: {
      name: 'bIsDisconnected',
      parseFunction: 'readBit',
      parseType: 'default',
    },
    Ping: {
      name: 'Ping',
      parseFunction: 'readByte',
      parseType: 'default',
    },
  }
}
