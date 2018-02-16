import { DestinyDisplayPropertiesDefinition } from './general-models';

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

