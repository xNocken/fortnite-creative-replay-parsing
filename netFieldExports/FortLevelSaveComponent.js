module.exports = {
  path: [
    '/Script/FortniteGame.FortLevelSaveComponent',
  ],
  parseLevel: 1,
  redirects: ['LevelSave'],
  properties: {
    CreatorName: {
      parseFunction: 'readString',
      parseType: 'default',
    },
    SupportCode: {
      parseFunction: 'readString',
      parseType: 'default',
    },
    Mnemonic: {
      parseFunction: 'readString',
      parseType: 'default',
    },
    Version: {
      parseFunction: 'readIntPacked',
      parseType: 'default',
    },
    DescriptionTags: {
      parseFunction: 'readString',
      parseType: 'readDynamicArray',
    },
    IslandIntroduction: {
      parseFunction: 'readString',
      parseType: 'readDynamicArray',
    },
    Locale: {
      parseFunction: 'readString',
      parseType: 'default',
    },
    ImageUrl: {
      parseFunction: 'readString',
      parseType: 'default',
    },
    IslandType: {
      parseType: 'ignore',
    },
    AccountId: {
      parseFunction: 'readString',
      parseType: 'default',
    },
    MinimumNumberOfPlayers: {
      parseFunction: 'readByte',
      parseType: 'default',
    },
    MmsType: {
      parseType: 'ignore',
    },
    PlayerCount: {
      parseFunction: 'readByte',
      parseType: 'default',
    },
    NumberOfTeams: {
      parseFunction: 'readByte',
      parseType: 'default',
    },
    PlayersPerTeam: {
      parseFunction: 'readByte',
      parseType: 'default',
    },
    JoinInProgressType: {
      type: 'JoinInProgress',
      bits: 2,
      parseType: 'readEnum',
    },
    bIsLoaded: {
      parseFunction: 'readBit',
      parseType: 'default',
    },
    TextLiteral: {
      parseFunction: 'readString',
      parseType: 'default',
    },
    UniqueGameVersion: {
      parseFunction: 'readInt32',
      parseType: 'default',
    },
  }
};
