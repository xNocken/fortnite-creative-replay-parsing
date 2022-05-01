module.exports = {
  path: ['/Script/FortniteGame.FortMinigameStatsComponent'],
  redirects: ['FortMinigameStats'],
  parseLevel: 0,
  exportType: 'array',
  properties: {
    LoadedStats: {
      parseType: 'readDynamicArray',
      type: 'ItemDefinition',
    },
    TrackedStatObjects: {
      parseType: 'readDynamicArray',
      type: 'ItemDefinition',
    },
    ScoreboardStatObjects: {
      parseType: 'readDynamicArray',
      type: 'ItemDefinition',
    },
    PersistentStatList: {
      parseType: 'readDynamicArray',
      type: 'ItemDefinition',
    },
    ScoreboardColumnOrder: {
      parseType: 'readDynamicArray',
      parseFunction: 'readInt32',
    },
    StatNamesInUse: {
      parseType: 'readDynamicArray',
      parseFunction: 'readString',
    },
    Stats: {
      parseType: 'readDynamicArray',
      storeAsHandle: true,
    },
    PlayerStats: {
      parseType: 'readDynamicArray',
      storeAsHandle: true,
    },
    PlayerBucketStats: {
      parseType: 'readDynamicArray',
      storeAsHandle: true,
    },
    Count: {
      parseFunction: 'readInt32',
      parseType: 'default',
    },
    Filter: {
      type: 'ItemDefinition',
      parseType: 'readClass',
    },
    Player: {
      parseFunction: 'readNetId',
      parseType: 'default',
    },
    BucketIndex: {
      parseFunction: 'readInt32',
      parseType: 'default',
    },
  },
};
