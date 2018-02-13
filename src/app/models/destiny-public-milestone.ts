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
