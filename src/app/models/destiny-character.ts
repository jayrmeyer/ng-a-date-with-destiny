import { DestinyProgression } from './destiny';
import { DestinyMilestone } from './destiny-milestones';
import { DestinyInventoryItemDefinition } from './destiny-definitions';
import { DestinyFactionProgression } from './destiny-progression';
import { DestinyQuestStatus } from './destiny-quests';

export class DestinyCharacterProgressionComponent {
  progressions: DestinyProgression;
  factions: DestinyFactionProgression;
  milestones: DestinyMilestone;
  quests: DestinyQuestStatus[];
  uninstancedItemObjectives: DestinyInventoryItemDefinition[];
}
