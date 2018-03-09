import { DestinyItemQuantity,
         DestinyProgression } from './destiny';
import { DestinyColor } from './general-models';
import { DestinyVendorDefinition,
         DestinyFactionVendorDefinition,
         DestinyDestinationDefinition,
         DestinyActivityDefinition,
         DestinyDisplayPropertiesDefinition,
         DestinyInventoryItemDefinition,
         DestinyObjectiveDefinition,
         DestinyFactionDefinition,
         DestinyProgressionDefinition,
         DestinyRaceDefinition,
         DestinyClassDefinition,
         DestinyGenderDefinition } from './destiny-definitions';
import { Milestone } from './destiny-public-milestone';
import { DestinyCharacterProgressionComponent } from './destiny-character';
import { DestinyInventoryComponent } from './destiny-inventory';

// Following set of classes are for the base message with hash values
// "Usable" classes with descriptions are listed below
export interface BungieUserByIdBungieResponse {
  Response: DestinyGeneralUser;
  ErrorCode: number;
  ThrottleSeconds: number;
  ErrorStatus: string;
  Message: string;
  MessageData: string;
}

export interface DestinyPlayerBungieResponse {
  Response: UserInfoCard;
  ErrorCode: number;
  ThrottleSeconds: number;
  ErrorStatus: string;
  Message: string;
  MessageData: string;
}

export class DestinyGeneralUser {
  membershipId: number;
  uniqueName: string;
  normalizedName: string;
  displayName: string;
  profilePicture: number;
  profileTheme: number;
  userTitle: number;
  successMessageFlags: number;
  isDeleted: boolean;
  about: string;
  firstAccess: Date;
  lastUpdate: Date;
  legacyPortalUID: number;
  context: UserToUserContext;
  psnDisplayName: string;
  xboxDisplayName: string;
  fbDisplayName: string;
  showActivity: boolean;
  locale: string;
  localeInheritDefault: boolean;
  lastBanReportId: number;
  showGroupMessaging: boolean;
  profilePicturePath: string;
  profilePictureWidePath: string;
  profileThemeName: string;
  userTitleDisplay: string;
  statusText: string;
  statusDate: Date;
  profileBanExpire: Date;
  blizzardDisplayName: string;
}

export class UserToUserContext {
  isFollowing: boolean;
  ignoreStatus: IgnoreResponse;
  globalIgnoreEndDate: Date;
}

export class IgnoreResponse {
  isIgnored: boolean;
  ignoreFlags: number;
}

export interface ProfileBungieResponse {
  Response: DestinyProfileResponse;
  ErrorCode: number;
  ThrottleSeconds: number;
  ErrorStatus: string;
  Message: string;
  MessageData: string;
}

export interface DestinyProfileResponse {
  // vendorReceipts: SingleComponentResponseOfDestinyVendorReceiptsComponent;
  // profileInventory: SingleComponentResponseOfDestinyInventoryComponent;
  // profileCurrencies: SingleComponentResponseOfDestinyInventoryComponent;
  // profile: SingleComponentResponseOfDestinyProfileComponent;
  // profileKiosks: SingleComponentResponseOfDestinyKiosksComponent;
  characters: DictionaryComponentResponseOfint64AndDestinyCharacterComponent;
  // characterInventories: DictionaryComponentResponseOfint64AndDestinyInventoryComponent;
  characterProgressions: DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent;
  // characterRenderData: DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent;
  // characterActivities: DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent;
  characterEquipment: DictionaryComponentResponseOfint64AndDestinyInventoryComponent;
  // characterKiosks: DictionaryComponentResponseOfint64AndDestinyKiosksComponent;
  // itemComponents: DestinyItemComponentSetOfint64;
}

export interface DictionaryComponentResponseOfint64AndDestinyCharacterComponent {
  data: DestinyCharacterComponent;
  privacy: number;
}

export class DestinyCharacterComponent {
  membershipId: number;
  membershipType: number;
  characterId: number;
  dateLastPlayed: Date;
  minutesPlayedThisSession: number;
  minutesPlayedTotal: number;
  light: number;
  stats: number;
  raceHash: number;
  race: DestinyRaceDefinition;
  genderHash: number;
  gender: DestinyGenderDefinition;
  classHash: number;
  class: DestinyClassDefinition;
  raceType: number;
  classType: number;
  genderType: number;
  empblemPath: string;
  emblemBackgroundPath: string;
  emblemHash: number;
  emblem: DestinyInventoryItemDefinition;
  emblemColor: DestinyColor;
  levelProgression: DestinyProgression;
  baseCharacterLevel: number;
  percentToNextLevel: number;
}



export class UserInfoCard {
  supplementalDisplayName: string;
  iconPath: string;
  membershipType: number;
  membershipId: number;
  displayName: string;
}

export interface DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent {
  data: DestinyCharacterProgressionComponent;
  privacy: number;
}

export interface DictionaryComponentResponseOfint64AndDestinyInventoryComponent {
  data: DestinyInventoryComponent;
  privacy: number;
}

export class DestinyFactionProgression {
  factionHash: number;
  faction: DestinyFactionDefinition;
  factionVendorIndex: number;
  progressionHash: number;
  progression: DestinyProgressionDefinition;
  dailyProgress: number;
  dailyLimit: number;
  weeklyProgress: number;
  weeklyLimit: number;
  currentProgress: number;
  level: number;
  levelCap: number;
  stepIndex: number;
  progressToNextLevel: number;
  nextLevelAt: number;
}
