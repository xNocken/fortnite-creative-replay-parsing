module.exports = {
  path: [
    '/Game/Athena/Playset/Minigames/Minigame_PlayerCreated.Minigame_PlayerCreated_C',
  ],
  parseLevel: 1,
  exportGroup: 'gameData',
  exportName: 'minigames',
  exportType: 'array',
  properties: {
    CurrentRound: {
      name: 'CurrentRound',
      parseFunction: 'readInt32',
      parseType: 'default',
    },
    TotalRounds: {
      name: 'TotalRounds',
      parseFunction: 'readInt32',
      parseType: 'default',
    },
    TeamArray: {
      name: 'TeamArray',
      parseType: 'readDynamicArray',
    },
    TeamIndex: {
      name: 'TeamIndex',
      parseFunction: 'readByte',
      parseType: 'default',
    },
    TeamName: {
      name: 'TeamName',
      parseFunction: 'readString',
      parseType: 'default',
    },
    TeamColorIndex: {
      name: 'TeamColorIndex',
      parseFunction: 'readByte',
      parseType: 'default',
    },
    MaxInitTeamSize: {
      name: 'MaxInitTeamSize',
      parseFunction: 'readByte',
      parseType: 'default',
    },
    InitTeamSizeWeight: {
      name: 'InitTeamSizeWeight',
      parseFunction: 'readByte',
      parseType: 'default',
    },
    bHasBucketAvailable: {
      name: 'bHasBucketAvailable',
      parseFunction: 'readBit',
      parseType: 'default',
    },
    EliminatedCount: {
      name: 'EliminatedCount',
      parseFunction: 'readIntPacked',
      parseType: 'default',
    },
    TeamSize: {
      name: 'TeamSize',
      parseFunction: 'readIntPacked',
      parseType: 'default',
    },
    TrackedStats: {
      name: 'TrackedStats',
      type: 'ItemDefinition',
      parseType: 'readDynamicArray',
    },
    ScoreboardStats: {
      name: 'ScoreboardStats',
      type: 'ItemDefinition',
      parseType: 'readDynamicArray',
    },
    PlayerStats: {
      name: 'PlayerStats',
      parseType: 'readDynamicArray',
    },
    PlayerBucketStats: {
      name: 'PlayerBucketStats',
      parseType: 'readDynamicArray',
    },
    Stats: {
      name: 'Stats',
      type: 'DebugObject',
      parseType: 'readDynamicArray',
    },
    Filter: {
      name: 'Filter',
      type: 'ItemDefinition',
      parseType: 'readClass',
    },
    Count: {
      name: 'Count',
      parseFunction: 'readInt32',
      parseType: 'default',
    },
    Player: {
      name: 'Player',
      parseFunction: 'readNetId',
      parseType: 'default',
    },
    BucketIndex: {
      name: 'BucketIndex',
      parseFunction: 'readByte',
      parseType: 'default',
    },
    PlayerBuckets: {
      name: 'PlayerBuckets',
      parseType: 'readDynamicArray',
    },
    ClassSlotArray: {
      name: 'ClassSlotArray',
      parseType: 'readDynamicArray',
    },
    TeamIdAtGameStart: {
      name: 'TeamIdAtGameStart',
      parseFunction: 'readByte',
      parseType: 'default',
    },
    TeamIdAtRoundStart: {
      name: 'TeamIdAtRoundStart',
      parseFunction: 'readByte',
      parseType: 'default',
    },
    DesiredTeamSizePercent: {
      name: 'DesiredTeamSizePercent',
      parseFunction: 'readFloat32',
      parseType: 'default',
    },
    PlayerIds: {
      name: 'PlayerIds',
      parseFunction: 'readNetId',
      parseType: 'readDynamicArray',
    },
    RoundWinHistory: {
      name: 'RoundWinHistory',
      parseFunction: 'readInt32',
      parseType: 'readDynamicArray',
    },
    UIExtensionTags: {
      name: 'UIExtensionTags',
      type: 'FGameplayTagContainer',
      parseType: 'readClass',
    },
    ClassSlotIndex: {
      name: 'ClassSlotIndex',
      parseFunction: 'readByte',
      parseType: 'default'
    },
    ClassName: {
      name: 'ClassName',
      parseFunction: 'readString',
      parseType: 'default'
    },
    InventoryItems: {
      name: 'InventoryItems',
      parseType: 'readDynamicArray'
    },
    Item: {
      name: 'Item',
      type: 'ItemDefinition',
      parseType: 'readClass'
    },
    bUseTeamScore: {
      name: 'bUseTeamScore',
      parseFunction: 'readBit',
      parseType: 'default'
    },
    CurrentState: {
      name: 'CurrentState',
      type: 'EFortMinigameState',
      bits: 4,
      parseType: 'readEnum'
    },
  }
};
