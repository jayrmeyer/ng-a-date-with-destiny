import { DestinyInventoryItemDefinition ,
         DestinyVendorDefinition,
         DestinyObjectiveDefinition,
         DestinyDestinationDefinition,
         DestinyActivityDefinition } from './destiny-definitions';

export class DestinyQuestStatus {
  questHash: number;
  quest: DestinyInventoryItemDefinition;
  stepHash: number;
  step: DestinyInventoryItemDefinition;
  stepObjectives: DestinyObjectiveProgress[];
  tracked: boolean;
  itemInstanceId: number;
  completed: boolean;
  redeemed: boolean;
  started: boolean;
  vendorHash: number;
  vendor: DestinyVendorDefinition;
}

export class DestinyObjectiveProgress {
  objectiveHash: number;
  objective: DestinyObjectiveDefinition;
  destinationHash: number;
  destination: DestinyDestinationDefinition;
  activityHash: number;
  activity: DestinyActivityDefinition;
  progress: number;
  complete: boolean;
}
