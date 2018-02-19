import { DestinyDisplayPropertiesDefinition, DestinyColor } from './general-models';

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

export class DestinyItemQuantity {
  itemHash: number;
  item: DestinyInventoryItemDefinition;
  itemInstanceId: number;
  quantity: number;
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

export class DestinyAnimationReference {

}

export class HyperlinkReference {

}

export class DestinyItemCategoryDefinition {

}

export class SpecialItemType {

}

export class DestinyItemType {

}

export class DestinyItemSubType {

}

export class DestinyClass {

}

export class DestinyDamageTypeDefinition {

}

export class DamageType {

}

