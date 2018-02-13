// Following set of classes are for the base message with hash values
// "Usable" classes with descriptions are listed below
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
export class PublicMilestone {
  displayProperties: DestinyDisplayPropertiesDefinition;
  image: string;
  milestoneType: string;
  recruitable: boolean;
  friendlyName: string;
  showInExplorer: boolean;
  explorePrioritizesActivityImage: string;
  hasPredictableDates: boolean;
  // quests: DestinyMilestoneQuestDefinition;
  // rewards: DestinyMilestoneRewardCategoryDefinition;
  vendorsDisplayTitle: string;
  // vendors: DestinyMilestoneVendorDefinition[];
  // values: DestinyMilestoneValueDefinition;
  isInGameMilestone: boolean;
  hash: number;
  index: number;
  redacted: boolean;
}

export class DestinyDisplayPropertiesDefinition {
  description: string;
  name: string;
  icon: string;
  hasIcon: boolean;
}

/*
export class DestinyMilestoneQuestDefinition {
  questItemHash: number;
  displayProperties: DestinyDisplayPropertiesDefinition;
  overrideImage: string;
  questRewards: DestinyMilestoneQuestRewardsDefinition;
  activities:
}
*/
