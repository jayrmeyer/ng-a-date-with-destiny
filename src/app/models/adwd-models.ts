import { DestinyColor } from './general-models';
import {
  DestinyRaceDefinition,
  DestinyGenderDefinition,
  DestinyClassDefinition,
  DestinyInventoryItemDefinition
} from './destiny-definitions';
import { DestinyProgression } from './destiny';
import { DestinyFactionProgression } from './destiny-progression';
import { DestinyMilestone } from './destiny-milestones';
import { DestinyQuestStatus } from './destiny-quests';
import { DestinyItemComponent } from './destiny-item';

export class ADWDCharacter {
  membershipId: number;
  membershipType: number;
  characterId: number;
  dateLastPlayed: Date;
  minutesPlayedThisSession: number;
  minutesPlayedTotal: number;
  light: number;
  stats: number;
  race: DestinyRaceDefinition;
  gender: DestinyGenderDefinition;
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

  constructor() {}
}

export class ADWDCharacterAndProgression extends ADWDCharacter {
  progressions: DestinyProgression[];
  factions: DestinyFactionProgression[];
  milestones: DestinyMilestone[];
  quests: DestinyQuestStatus[];
  uninstantiatedItemObjectives: DestinyInventoryItemDefinition[];
}

export class ADWDCharacterAndEquiped extends ADWDCharacter {
  items: DestinyItemComponent[];
}
