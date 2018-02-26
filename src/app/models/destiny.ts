import { DestinyProgressionDefinition } from './destin-definitions';

export class DestinyProgression {
  progressionHash: number;
  progression: DestinyProgressionDefinition;
  dailyProgress: number;
  dailyLimit: number;
  weeklyProgress: number;
  weeklyLimit: number;
  currentProgress: number;
  level: number;
  levelCap: number;
  stepIndex: number;
  progressToNextLevel: number;
  nextLevelAt: number;
}

export class DestinyItemQuantity {
  itemHash: number;
  item: DestinyInventoryItemDefinition;
  itemInstanceId: number;
  quantity: number;
}
