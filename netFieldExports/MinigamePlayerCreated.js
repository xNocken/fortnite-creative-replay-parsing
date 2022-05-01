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
      parseFunction: 'readInt32',
      parseType: 'default',
    },
    TotalRounds: {
      parseFunction: 'readInt32',
      parseType: 'default',
    },
    TeamArray: {
      parseType: 'readDynamicArray',
    },
    TeamIndex: {
      parseFunction: 'readByte',
      parseType: 'default',
    },
    TeamName: {
      parseFunction: 'readString',
      parseType: 'default',
    },
    TeamColorIndex: {
      parseFunction: 'readByte',
      parseType: 'default',
    },
    MaxInitTeamSize: {
      parseFunction: 'readByte',
      parseType: 'default',
    },
    InitTeamSizeWeight: {
      parseFunction: 'readByte',
      parseType: 'default',
    },
    bHasBucketAvailable: {
      parseFunction: 'readBit',
      parseType: 'default',
    },
    EliminatedCount: {
      parseFunction: 'readIntPacked',
      parseType: 'default',
    },
    TeamSize: {
      parseFunction: 'readIntPacked',
      parseType: 'default',
    },
    TrackedStats: {
      type: 'ItemDefinition',
      parseType: 'readDynamicArray',
    },
    ScoreboardStats: {
      type: 'ItemDefinition',
      parseType: 'readDynamicArray',
    },
    PlayerStats: {
      parseType: 'readDynamicArray',
    },
    PlayerBucketStats: {
      parseType: 'readDynamicArray',
    },
    Stats: {
      type: 'DebugObject',
      parseType: 'readDynamicArray',
    },
    Filter: {
      type: 'ItemDefinition',
      parseType: 'readClass',
    },
    Count: {
      parseFunction: 'readInt32',
      parseType: 'default',
    },
    Player: {
      parseFunction: 'readNetId',
      parseType: 'default',
    },
    BucketIndex: {
      parseFunction: 'readByte',
      parseType: 'default',
    },
    PlayerBuckets: {
      parseType: 'readDynamicArray',
    },
    ClassSlotArray: {
      parseType: 'readDynamicArray',
    },
    TeamIdAtGameStart: {
      parseFunction: 'readByte',
      parseType: 'default',
    },
    TeamIdAtRoundStart: {
      parseFunction: 'readByte',
      parseType: 'default',
    },
    DesiredTeamSizePercent: {
      parseFunction: 'readFloat32',
      parseType: 'default',
    },
    PlayerIds: {
      parseFunction: 'readNetId',
      parseType: 'readDynamicArray',
    },
    RoundWinHistory: {
      parseFunction: 'readInt32',
      parseType: 'readDynamicArray',
    },
    UIExtensionTags: {
      type: 'FGameplayTagContainer',
      parseType: 'readClass',
    },
    ClassSlotIndex: {
      parseFunction: 'readByte',
      parseType: 'default'
    },
    ClassName: {
      parseFunction: 'readString',
      parseType: 'default'
    },
    InventoryItems: {
      parseType: 'readDynamicArray'
    },
    Item: {
      type: 'ItemDefinition',
      parseType: 'readClass'
    },
    bUseTeamScore: {
      parseFunction: 'readBit',
      parseType: 'default'
    },
    CurrentState: {
      type: 'EFortMinigameState',
      bits: 4,
      parseType: 'readEnum'
    },
  }
};
