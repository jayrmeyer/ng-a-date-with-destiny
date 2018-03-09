import { DestinyItemQuantity, ItemLocation } from './destiny';
import { DestinyColor,
         DestinyAnimationReference,
         HyperlinkReference,
         SpecialItemType,
         DestinyItemType,
         DestinyClass,
         DestinyItemSubType,
         DamageType,
         DestinyActivityModeType } from './general-models';
import { DestinyMilestoneQuestRewardItem } from './destiny-milestones';

export class DestinyDisplayPropertiesDefinition {
  description: string;
  name: string;
  icon: string;
  hasIcon: boolean;
}

export class DestinyProgressionDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  scope: number;
  repeatLastStep: boolean;
  source: string;
  steps: DestinyProgressionStepDefinition[];
  visible: boolean;
  factionHash: number;
  faction: DestinyFactionDefinition;
  hash: number;
  index: number;
  redacted: boolean;
}

export class DestinyProgressionStepDefinition {
  stepName: string;
  displayEffectType: number;
  progressTotal: number;
  rewardItems: DestinyItemQuantity;
}

export class DestinyFactionDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  progressionHash: number;
  progression: DestinyProgressionDefinition;
  tokenValues: number;
  rewardItemHash: number;
  rewardItem: DestinyInventoryItemDefinition;
  rewardVendorHash: number;
  rewardVendor: DestinyVendorDefinition;
  vendors: DestinyFactionVendorDefinition[];
  hash: number;
  index: number;
  redacted: boolean;
}

export class DestinyInventoryItemDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  secondaryIcon: string;
  secondaryOverlay: string;
  secondarySpecial: string;
  backgroundColor: DestinyColor;
  screenshot: string;
  itemTypeDisplayName: string;
  uiItemDisplayStyle: string;
  itemTypeAndTierDisplayName: string;
  displaySource: string;
  tooltipStyle: string;
  action: DestinyItemActionBlockDefinition;
  inventory: DestinyItemInventoryBlockDefinition;
  setData: DestinyItemSetBlockDefinition;
  stats: DestinyItemStatBlockDefinition;
  emblemObjectiveHash: number;
  equippingBlock: DestinyEquippingBlockDefinition;
  translationBlock: DestinyItemTranslationBlockDefinition;
  preview: DestinyItemPreviewBlockDefinition;
  quality: DestinyItemQualityBlockDefinition;
  value: DestinyItemValueBlockDefinition;
  sourceData: DestinyItemSourceBlockDefinition;
  objectives: DestinyItemObjectiveBlockDefinition;
  plug: DestinyItemPlugDefinition;
  gearset: DestinyItemGearsetBlockDefinition;
  sack: DestinyItemSackBlockDefinition;
  sockets: DestinyItemSocketBlockDefinition;
  summary: DestinyItemSummaryBlockDefinition;
  talentGrid: DestinyItemTalentGridBlockDefinition;
  investmentStats: DestinyItemInvestmentStatDefinition[];
  perks: DestinyItemPerkEntryDefinition[];
  loreHash: number;
  lore: DestinyLoreDefinition;
  summaryItemHash: number;
  summaryItem: DestinyInventoryItemDefinition;
  animations: DestinyAnimationReference;
  allowActions: boolean;
  links: HyperlinkReference[];
  doesPostmasterPullHaveSideEffects: boolean;
  nonTransferrable: boolean;
  itemCategoryHashes: number[];
  itemCategories: DestinyItemCategoryDefinition[];
  specialItemType: SpecialItemType;
  itemType: DestinyItemType;
  itemSubType: DestinyItemSubType;
  classType: DestinyClass;
  equippable: boolean;
  damageTypeHashes: number[];
  damageTypes: DestinyDamageTypeDefinition[];
  defaultDamageType: DamageType;
  defaultDamageTypeHash: number;
  hash: number;
  index: number;
  redacted: boolean;
}


export class DestinyItemActionBlockDefinition {

}

export class DestinyItemInventoryBlockDefinition {

}

export class DestinyItemSetBlockDefinition {

}

export class DestinyItemStatBlockDefinition {

}

export class DestinyEquippingBlockDefinition {

}

export class DestinyItemTranslationBlockDefinition {

}

export class DestinyItemPreviewBlockDefinition {

}

export class DestinyItemQualityBlockDefinition {

}

export class DestinyItemValueBlockDefinition {

}

export class DestinyItemSourceBlockDefinition {

}

export class DestinyItemObjectiveBlockDefinition {

}

export class DestinyItemPlugDefinition {

}

export class DestinyItemGearsetBlockDefinition {

}

export class DestinyItemSackBlockDefinition {

}

export class DestinyItemSocketBlockDefinition {

}

export class DestinyItemSummaryBlockDefinition {

}

export class DestinyItemTalentGridBlockDefinition {

}

export class DestinyItemInvestmentStatDefinition {

}

export class DestinyItemPerkEntryDefinition {

}

export class DestinyLoreDefinition {

}

export class DestinyItemCategoryDefinition {

}

export class DestinyDamageTypeDefinition {

}

export class DestinyVendorDefinition {

}

export class DestinyFactionVendorDefinition {
  vendorHash: number;
  vendor: DestinyVendorDefinition;
  destinationHash: number;
  destination: DestinyDestinationDefinition;
  backgroundImagePath: string;
}

export class DestinyActivityDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  releaseIcon: string;
  releaseTime: number;
  activityLevel: number;
  activityLightLevel: number;
  destinationHash: number;
  destination: DestinyDestinationDefinition;
  placeHash: number;
  place: DestinyPlaceDefinition;
  activityTypeHash: number;
  activityType: DestinyActivityTypeDefinition;
  tier: number;
  pgcrImage: string;
  rewards: DestinyActivityRewardDefinition[];
  modifiers: DestinyActivityModifierDefinition[];
  isPlaylist: boolean;
  challenges: DestinyActivityChallengeDefinition[];
  optionalUnlockStrings: DestinyActivityUnlockStringDefinition[];
  playlistItems: DestinyActivityPlaylistItemDefinition[];
  activityGraphList: DestinyActivityGraphListEntryDefinition[];
  matchmaking: DestinyActivityMatchmakingBlockDefinition;
  guidedGame: DestinyActivityGuidedBlockDefinition;
  directActivityModeHash: number;
  directActivityMode: DestinyActivityModeDefinition;
  directActivityModeType: number;
  activityModeHashes: number[];
  activityModes: DestinyActivityModeDefinition[];
  activityModeTypes: DestinyActivityModeType[];
  isPvP: boolean;
  hash: number;
  index: number;
  redacted: boolean;
}

export class DestinyDestinationDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  placeHash: number;
  place: DestinyPlaceDefinition;
  defaultFreeroamActivityHash: number;
  defaultFreeroamActivity: DestinyActivityDefinition;
  activityGraphEntries: DestinyActivityGraphListEntryDefinition[];
  bubbleSettings: DestinyDestinationBubbleSettingDefinition[];
  bubbles: DestinyBubbleDefinition[];
  hash: number;
  index: number;
  redacted: boolean;
}

export class DestinyPlaceDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  hash: number;
  index: number;
  redacted: boolean;
}

export class DestinyActivityGraphListEntryDefinition {
  activityGraphHash: number;
  activityGraph: DestinyActivityGraphDefinition;
}

export class DestinyActivityGraphDefinition {
  nodes: DestinyActivityGraphNodeDefinition[];
  artElements: DestinyActivityGraphArtElementDefinition[];
  connections: DestinyActivityGraphConnectionDefinition[];
  displayObjectives: DestinyActivityGraphDisplayObjectiveDefinition[];
  displayProgressions: DestinyActivityGraphDisplayProgressionDefinition[];
  linkedGraphs: DestinyLinkedGraphDefinition[];
  hash: number;
  index: number;
  redacted: boolean;
}

export class DestinyActivityGraphNodeDefinition {
}

export class DestinyActivityGraphArtElementDefinition {

}

export class DestinyActivityGraphConnectionDefinition {

}

export class DestinyActivityGraphDisplayObjectiveDefinition {

}

export class DestinyActivityGraphDisplayProgressionDefinition {

}

export class DestinyLinkedGraphDefinition {

}

export class DestinyDestinationBubbleSettingDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
}

export class DestinyBubbleDefinition {
  hash: number;
}

export class DestinyActivityTypeDefinition {

}

export class DestinyActivityRewardDefinition {

}

export class DestinyActivityModifierDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  hash: number;
  index: number;
  redacted: boolean;
}

export class DestinyActivityChallengeDefinition {
  objective: DestinyObjectiveDefinition;
}

export class DestinyActivityUnlockStringDefinition {

}

export class DestinyActivityPlaylistItemDefinition {

}

export class DestinyActivityMatchmakingBlockDefinition {

}

export class DestinyActivityGuidedBlockDefinition {

}

export class DestinyActivityModeDefinition {

}

export class DestinyObjectiveDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  completionValue: number;
  locationHash: number;
  // location???
  allowNegativeValue: boolean;
  allowValueChangeWhenCompleted: boolean;
  isCountingDownward: boolean;
  valueStyle: number;
  progressDescription: string;
  perks: DestinyObjectivePerkEntryDefinition;
  stats: DestinyObjectiveStatEntryDefinition;
  hash: number;
  index: number;
  redacted: boolean;
}

export class DestinyObjectivePerkEntryDefinition {

}

export class DestinyObjectiveStatEntryDefinition {

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

export class DestinyMilestoneDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  image: string;
  milestoneType: number;  // DestinyMilestoneType enum
  recruitable: boolean;
  friendlyName: string;
  showInExplorer: boolean;
  explorePrioritizesActivityImage: boolean;
  hasPredictableDates: boolean;
  quests: DestinyMilestoneQuestDefinition;
  rewards: DestinyMilestoneRewardCategoryDefinition;
  vendorsDisplayTitle: string;
  vendors: DestinyMilestoneVendorDefinition[];
  values: DestinyMilestoneValueDefinition;
  isInGameMilestone: boolean;
  hash: number;
  index: number;
  redacted: boolean;
}

export class DestinyRaceDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  raceType: number;
  genderedRaceNames: number;
  hash: number;
  index: number;
  redacted: boolean;
}

export class DestinyGenderDefinition {
  genderType: number;
  displayProperties: DestinyDisplayPropertiesDefinition;
  hash: number;
  index: number;
  redacted: boolean;
}

export class DestinyClassDefinition {
  classType: number;
  displayProperties: DestinyDisplayPropertiesDefinition;
  genderedClassNames: number;
  mentorVendorHash: number;
  hash: number;
  index: number;
  redacted: boolean;
}

export class DestinyInventoryBucketDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  scope: number;
  category: number;
  bucketOrder: number;
  itemCount: number;
  location: ItemLocation;
}
