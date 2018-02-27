
export class DestinyColor {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export class DestinyAnimationReference {
  animName: string;
  animIdentifier: string;
  path: string;
}

export class HyperlinkReference {
  title: string;
  url: string;
}

export enum DestinyComponentType {
  None = 0,
  Profiles = 100,
  VendorReceipts = 101,
  ProfileInventories = 102,
  ProfileCurrencies = 103,
  Characters = 200,
  CharacterInventories = 201,
  CharacterProgressions = 202,
  CharacterRenderData = 203,
  CharacterActivities = 204,
  CharacterEquipment = 205,
  ItemInstances = 300,
  ItemObjectives = 301,
  ItemPerks = 302,
  ItemRenderData = 303,
  ItemStats = 304,
  ItemSockets = 305,
  ItemTalentGrids = 306,
  ItemCommonData = 307,
  ItemPlugStates = 308,
  Vendors = 400,
  VendorCategories = 401,
  VendorSales = 402,
  Kiosks = 500
}

export enum SpecialItemType {
  None = 0,
  SpecialCurrency = 1,
  Armor = 8,
  Weapon = 9,
  Engram = 23,
  Consumable = 24,
  ExchangeMaterial = 25,
  MissionReward = 27,
  Currency = 29
}

export enum DestinyItemType {
  None = 0,
  Currency = 1,
  Armor = 2,
  Weapon = 3,
  Message = 7,
  Engram = 8,
  Consumable = 9,
  ExchangeMaterial = 10,
  MissionReward = 11,
  QuestStep = 12,
  QuestStepComplete = 13,
  Emblem = 14,
  Quest = 15,
  Subclass = 16,
  ClanBanner = 17,
  Aura = 18,
  Mod = 19,
  Dummy = 20,
  Ship = 21,
  Vehicle = 22,
  Emote = 23,
  Ghost = 24,
  Package = 25
}

export enum DestinyItemSubType {
  None = 0,
  Crucible = 1, //  DEPRECATED.Items can be both "Crucible" and something else interesting.
  Vanguard = 2, //  DEPRECATED.An item can both be "Vanguard" and something else.
  Exotic = 5, //  DEPRECATED.An item can both be Exotic and something else.
  AutoRifle = 6,
  Shotgun = 7,
  Machinegun = 8,
  HandCannon = 9,
  RocketLauncher = 10,
  FusionRifle = 11,
  SniperRifle = 12,
  PulseRifle = 13,
  ScoutRifle = 14,
  Crm = 16, //  DEPRECATED.An item can both be CRM and something else.
  Sidearm = 17,
  Sword = 18,
  Mask = 19,
  Shader = 20,
  Ornament = 21,
  FusionRifleLine = 22,
  GrenadeLauncher = 23,
  SubmachineGun = 24,
  TraceRifle = 25,
  HelmetArmor = 26,
  GauntletsArmor = 27,
  ChestArmor = 28,
  LegArmor = 29,
  ClassArmor = 30
}

export enum DestinyClass {
  Titan = 0,
  Hunter = 1,
  Warlock = 2,
  Unknown = 3
}

export enum DamageType {
  None = 0,
  Kinetic = 1,
  Arc = 2,
  Thermal = 3,
  Void = 4,
  Raid = 5
}

export enum DestinyActivityModeType {
  None = 0,
  Story = 2,
  Strike = 3,
  Raid = 4,
  AllPvP = 5,
  Patrol = 6,
  AllPvE = 7,
  Reserved9 = 9,
  Control = 10,
  Reserved11 = 11,
  Clash = 12,
  Reserved13 = 13,
  CrimsonDoubles = 15,
  Nightfall = 16,
  HeroicNightfall = 17,
  AllStrikes = 18,
  IronBanner = 19,
  Reserved20 = 20,
  Reserved21 = 21,
  Reserved22 = 22,
  Reserved24 = 24,
  AllMayhem = 25,
  Reserved26 = 26,
  Reserved27 = 27,
  Reserved28 = 28,
  Reserved29 = 29,
  Reserved30 = 30,
  Supremacy = 31,
  Reserved32 = 32,
  Survival = 37,
  Countdown = 38,
  TrialsOfTheNine = 39,
  Social = 40,
  TrialsCountdown = 41,
  TrialsSurvival = 42,
  IronBannerControl = 43,
  IronBannerClash = 44,
  IronBannerSupremacy = 45
}
