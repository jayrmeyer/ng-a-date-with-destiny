import { DestinyDisplayPropertiesDefinition,
         DestinyInventoryItemDefinition,
         DestinyVendorDefinition,
         DestinyActivityDefinition,
         DestinyObjectiveDefinition,
         DestinyMilestoneQuestDefinition,
         DestinyMilestoneRewardCategoryDefinition,
         DestinyMilestoneVendorDefinition,
         DestinyMilestoneValueDefinition } from './destiny-definitions';
import { DestinyItemQuantity } from './destiny';
import { DestinyPublicMilestone } from './destiny-milestones';

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
