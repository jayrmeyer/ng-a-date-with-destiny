import { DestinyItemQuantity } from './destiny';

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

