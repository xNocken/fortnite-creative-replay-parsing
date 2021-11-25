module.exports = {
  path: [
    '/Script/FortniteGame.FortLevelSaveComponent',
  ],
  parseLevel: 1,
  exportGroup: 'gameData',
  exportName: 'levelsavecomponent',
  exportType: 'array',
  staticActorIds: ['LevelSave'],
  properties: {
    CreatorName: {
      name: 'CreatorName',
      parseFunction: 'readString',
      parseType: 'default',
    },
    SupportCode: {
      name: 'SupportCode',
      parseFunction: 'readString',
      parseType: 'default',
    },
    Mnemonic: {
      name: 'Mnemonic',
      parseFunction: 'readString',
      parseType: 'default',
    },
    Version: {
      name: 'Version',
      parseFunction: 'readIntPacked',
      parseType: 'default',
    },
    DescriptionTags: {
      name: 'DescriptionTags',
      parseFunction: 'readString',
      parseType: 'readDynamicArray',
    },
    IslandIntroduction: {
      name: 'IslandIntroduction',
      type: 'readString',
      parseType: 'readDynamicArray',
    },
    Locale: {
      name: 'Locale',
      parseFunction: 'readString',
      parseType: 'default',
    },
    ImageUrl: {
      name: 'ImageUrl',
      parseFunction: 'readString',
      parseType: 'default',
    },
    IslandType: {
      name: 'IslandType',
      parseType: 'ignore',
    },
    AccountId: {
      name: 'AccountId',
      parseFunction: 'readString',
      parseType: 'default',
    },
    MinimumNumberOfPlayers: {
      name: 'MinimumNumberOfPlayers',
      parseFunction: 'readByte',
      parseType: 'default',
    },
    MmsType: {
      name: 'MmsType',
      parseType: 'ignore',
    },
    PlayerCount: {
      name: 'PlayerCount',
      parseFunction: 'readByte',
      parseType: 'default',
    },
    NumberOfTeams: {
      name: 'NumberOfTeams',
      parseFunction: 'readByte',
      parseType: 'default',
    },
    PlayersPerTeam: {
      name: 'PlayersPerTeam',
      parseFunction: 'readByte',
      parseType: 'default',
    },
    JoinInProgressType: {
      name: 'JoinInProgressType',
      type: 'JoinInProgress',
      bits: 2,
      parseType: 'readEnum',
    },
    bIsLoaded: {
      name: 'bIsLoaded',
      parseFunction: 'readBit',
      parseType: 'default',
    },
    TextLiteral: {
      name: 'TextLiteral',
      parseFunction: 'readString',
      parseType: 'default',
    },
    UniqueGameVersion: {
      name: 'UniqueGameVersion',
      parseFunction: 'readInt32',
      parseType: 'default',
    },
  }
};
