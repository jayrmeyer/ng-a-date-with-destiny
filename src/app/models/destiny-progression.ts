import { DestinyFactionDefinition, DestinyProgressionDefinition } from './destiny-definitions';

export class DestinyFactionProgression {
  factionHash: number;
  faction: DestinyFactionDefinition;
  factionVendorIndex: number;
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
