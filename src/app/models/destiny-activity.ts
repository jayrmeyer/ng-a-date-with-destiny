import { DestinyDisplayPropertiesDefinition } from './general-models';
import { DestinyObjectiveDefinition } from './destiny-objective';

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

export class DestinyActivityModeType {

}
