import { DestinyMilestoneDefinition,
         DestinyVendorDefinition,
         DestinyInventoryItemDefinition } from './destiny-definitions';

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

}

export class DestinyMilestoneVendor {

}

export class DestinyMilestoneRewardCategory {

}
