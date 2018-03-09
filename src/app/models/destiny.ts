import { DestinyProgressionDefinition,
         DestinyInventoryItemDefinition } from './destiny-definitions';

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

export enum ItemLocation {
  Unknown = 0,
  Inventory = 1,
  Vault = 2,
  Vendor = 3,
  Postmaster = 4

}
