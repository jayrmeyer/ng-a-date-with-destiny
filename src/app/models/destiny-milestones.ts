import { DestinyMilestoneDefinition,
         DestinyVendorDefinition,
         DestinyInventoryItemDefinition,
         DestinyActivityDefinition,
         DestinyActivityModeDefinition,
         DestinyActivityModifierDefinition} from './destiny-definitions';
import { DestinyQuestStatus } from './destiny-quests';
import { DestinyChallengeStatus } from './destiny-challenges';

export class DestinyMilestone {
  milestoneHash;
  milestone: DestinyMilestoneDefinition;
  availableQuests: DestinyMilestoneQuest[];
  values: number;
  vendors: DestinyMilestoneVendor[];
  rewards: DestinyMilestoneRewardCategory[];
  startDate: Date;
  endDate: Date;
}

export class DestinyMilestoneQuestRewardItem {
  vendorHash: number;
  vendor: DestinyVendorDefinition;
  vendorItemIndex: number;
  itemHash: number;
  item: DestinyInventoryItemDefinition;
  itemInstanceId: number;
  quantity: number;
}

export class DestinyMilestoneQuest {
  questItemHash: number;
  questItem: DestinyInventoryItemDefinition;
  status: DestinyQuestStatus;
  activity: DestinyMilestoneActivity;
  challenges: DestinyChallengeStatus[];
}

export class DestinyMilestoneVendor {

}

export class DestinyMilestoneRewardCategory {

}

export class DestinyMilestoneActivity {
  activityHash: number;
  activity: DestinyActivityDefinition;
  activityModeHash: number;
  activityMode: DestinyActivityModeDefinition;
  activityModeType: number;
  modifierHashes: number[];
  modifiers: DestinyActivityModifierDefinition[];
  variants: DestinyActivityMilestoneVariant[];
}

export class DestinyActivityMilestoneVariant {
  activityHash: number;
  activity: DestinyActivityDefinition;
  completionStatus: DestinyMilestoneActivityCompletionStatus;
  activityModeHash: number;
  activityMode: DestinyActivityModeDefinition;
  activityModeType: number;
}

export class DestinyMilestoneActivityCompletionStatus {
  completed: boolean;
  phases: DestinyMilestoneActivityPhase[];
}

export class DestinyMilestoneActivityPhase {
  complete: boolean;
}
