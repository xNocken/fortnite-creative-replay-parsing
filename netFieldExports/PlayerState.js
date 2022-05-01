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
      parseFunction: 'readIntPacked',
      parseType: 'default',
    },
    UniqueId: {
      parseFunction: 'readNetId',
      parseType: 'default',
    },
    PlayerNamePrivate: {
      parseFunction: 'readString',
      parseType: 'default',
    },
    Platform: {
      parseFunction: 'readString',
      parseType: 'default',
    },
    TeamIndex: {
      parseFunction: 'readBitsToUnsignedInt',
      args: [7],
      parseType: 'default',
    },
    SquadId: {
      parseFunction: 'readByte',
      parseType: 'default',
    },
    bIsDisconnected: {
      parseFunction: 'readBit',
      parseType: 'default',
    },
    Ping: {
      parseFunction: 'readByte',
      parseType: 'default',
    },
    CompressedPing: {
      parseFunction: 'readByte',
      parseType: 'default',
    },
  }
}
