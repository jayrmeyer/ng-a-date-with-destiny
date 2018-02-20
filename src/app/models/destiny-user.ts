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
  vendorReceipts: SingleComponentResponseOfDestinyVendorReceiptsComponent;
  profileInventory: SingleComponentResponseOfDestinyInventoryComponent;
  profileCurrencies: SingleComponentResponseOfDestinyInventoryComponent;
  profile: SingleComponentResponseOfDestinyProfileComponent;
  profileKiosks: SingleComponentResponseOfDestinyKiosksComponent;
  characters: DictionaryComponentResponseOfint64AndDestinyCharacterComponent;
  characterInventories: DictionaryComponentResponseOfint64AndDestinyInventoryComponent;
  characterProgressions: DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent;
  characterRenderData: DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent;
  characterActivities: DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent;
  characterEquipment: DictionaryComponentResponseOfint645AndDestinyInventoryComponent;
  characterKiosks: DictionaryComponentResponseOfint64AndDestinyKiosksComponent;
  itemComponents: DestinyItemComponentSetOfint64;
}
