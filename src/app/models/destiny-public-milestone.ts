import { DestinyDisplayPropertiesDefinition } from './general-models';
import { DestinyInventoryItemDefinition, DestinyItemQuantity } from './destiny-item';
import { DestinyVendorDefinition } from './destiny-vendor';
import { DestinyActivityDefinition } from './destiny-activity';
import { DestinyObjectiveDefinition } from './destiny-objective';

// Following set of classes are for the base message with hash values
// "Usable" classes with descriptions are listed below
export interface PublicMilestoneBungieResponse {
  Response: DestinyPublicMilestone[];
  ErrorCode: number;
  ThrottleSeconds: number;
  ErrorStatus: string;
  Message: string;
  MessageData: string;
}

export interface DestinyPublicMilestone {
  milestoneHash: number;
  availableQuests: DestinyPublicMilestoneQuest[];
  vendorHashes: number[];
  vendors: DestinyPublicMilestoneVendor[];
  startDate: Date;
  endDate: Date;
}

export interface DestinyPublicMilestoneQuest {
  questItemHash: number;
  activity: DestinyPublicMilestoneActivity;
  challenges: DestinyPublicMilestoneChallenge[];

}

export interface DestinyPublicMilestoneVendor {
  vendorHash: number;
  previewItemHash: number;
}

export interface DestinyPublicMilestoneActivity {
  activityHash: number;
  modifierHashes: number[];
  variants: DestinyPublicMilestoneActivityVariant[];
  activityModeHash: number;
  activityModeType: number;
}

export interface DestinyPublicMilestoneActivityVariant {
  activityHash: number;
  activityModeHash: number;
  activityModeType: number;
}

export interface DestinyPublicMilestoneChallenge {
  objectiveHash: number;
  activityHash: number;
}

// Following are the "Usable" classes
export class Milestone {
  milestoneHash: number;
  displayProperties: DestinyDisplayPropertiesDefinition;
  image: string;
  milestoneType: string;
  recruitable: boolean;
  friendlyName: string;
  showInExplorer: boolean;
  explorePrioritizesActivityImage: string;
  hasPredictableDates: boolean;
  quests: DestinyMilestoneQuestDefinition[];
  rewards: DestinyMilestoneRewardCategoryDefinition;
  vendorsDisplayTitle: string;
  vendorHashes: number[];
  vendors: DestinyMilestoneVendorDefinition[];
  values: DestinyMilestoneValueDefinition;
  isInGameMilestone: boolean;
  hash: number;
  index: number;
  redacted: boolean;
  startDate: Date;
  endDate: Date;
}

export class DestinyMilestoneQuestDefinition {
  questItemHash: number;
  questItemDefinition: DestinyInventoryItemDefinition;
  displayProperties: DestinyDisplayPropertiesDefinition;
  overrideImage: string;
  questRewards: DestinyMilestoneQuestRewardsDefinition;
  activities: DestinyMilestoneActivityDefinition;
  challenges: DestinyPublicMilestoneChallengeDefinition;
}

export class DestinyMilestoneQuestRewardsDefinition {
  items: DestinyMilestoneQuestRewardItem[];
}

export class DestinyMilestoneActivityDefinition {
  conceptualActivityHash: number;
  conceptualActivity: DestinyActivityDefinition;
  variants: DestinyMilestoneActivityVariantDefinition;

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

export class DestinyMilestoneActivityVariantDefinition {
  activityHash: number;
  activity: DestinyActivityDefinition;
  order: number;
}

export class DestinyMilestoneRewardCategoryDefinition {
  categoryHash: number;
  categoryIdentifier: string;
  displayProperties: DestinyDisplayPropertiesDefinition;
  rewardEntries: DestinyMilestoneRewardEntryDefinition;
  order: number;
}

export class DestinyMilestoneRewardEntryDefinition {
  rewardEntryHash: number;
  rewardEntryIdentifier: string;
  items: DestinyItemQuantity;
  vendorHash: number;
  vendor: DestinyVendorDefinition;
  displayProperties: DestinyDisplayPropertiesDefinition;
  order: number;
}

export class DestinyMilestoneVendorDefinition {
  vendorHash: number;
  vendor: DestinyVendorDefinition;
}

export class DestinyMilestoneValueDefinition {
  key: string;
  displayProperties: DestinyDisplayPropertiesDefinition;
}

export class DestinyPublicMilestoneChallengeDefinition {
  object: DestinyObjectiveDefinition;
  activity: DestinyActivityDefinition;
}

export class DestinyMilestone {
  milestoneHash;
  milestone DestinyMilestoneDefintion;
  availableQuests: DestinyMilestoneQuest[];
  values: number;
  vendors: DestinyMilestoneVendor[];
  rewards: DestinyMilestoneRewardCategory[];
  startDate: Date;
  endDate: Date;
}
