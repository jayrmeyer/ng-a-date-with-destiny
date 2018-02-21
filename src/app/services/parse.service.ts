import { Injectable } from '@angular/core';

import { DestinyCacheService } from './destiny-cache.service';
import '../models/destiny-public-milestone';
import { DestinyPublicMilestone,
         PublicMilestone,
         DestinyMilestoneQuestDefinition,
         DestinyMilestoneActivityDefinition } from '../models/destiny-public-milestone';
import { DestinyActivityDefinition,
         DestinyActivityModifierDefinition,
         DestinyActivityChallengeDefinition } from '../models/destiny-activity';
import { DictionaryComponentResponseOfint64AndDestinyCharacterComponent, DestinyCharacterComponent } from '../models/destiny-user';
import { DestinyObjectiveDefinition } from '../models/destiny-objective';

const CONTENT_BASE_URL = 'http://www.bungie.net/';

@Injectable()
export class ParseService {

  constructor(private destinyCacheService: DestinyCacheService) { }

  public parseMilestones(unparsedMilestones: DestinyPublicMilestone[]): PublicMilestone[] {
    const returnArr: PublicMilestone[] = [];
    let populateReturn = true;
    let questsAvailable = true;

    Object.keys(unparsedMilestones).forEach((key: any) => {
      const milestone: PublicMilestone = new PublicMilestone();

      console.log('current milestone key: ' + key);
      console.log('current unparsed milestone is');
      console.log(unparsedMilestones[key]);

      const unparsedQuests = unparsedMilestones[key].availableQuests;
      if (!unparsedQuests) {
        questsAvailable = false;
      } else {
        questsAvailable = true;
      }

      milestone.milestoneHash = key;

      const cacheMilestone = this.destinyCacheService.cache.Milestone[unparsedMilestones[key].milestoneHash];


      // check to see if we can find the milestone in the cache; if not log an error to the console
      if (cacheMilestone) {
        console.log('cache for current milestone is');
        console.log(cacheMilestone);

        // find display properties
        if (cacheMilestone.displayProperties) {
          milestone.displayProperties = cacheMilestone.displayProperties;
        } else {
          if (questsAvailable) {
            milestone.displayProperties = cacheMilestone.quests[unparsedMilestones[key].availableQuests[0].questItemHash].displayProperties;
          } else {
            console.error('no display properities found for ' + key);
            populateReturn = false;
          }
        }

        // populate image
        if (cacheMilestone.image) {
          milestone.image = cacheMilestone.image;
        }

        // populate other milestone level properties
        milestone.milestoneType = cacheMilestone.milestoneType;
        milestone.recruitable = cacheMilestone.recruitable;
        milestone.friendlyName = cacheMilestone.friendlyName;
        milestone.showInExplorer = cacheMilestone.showInExplorer;
        milestone.explorePrioritizesActivityImage = cacheMilestone.explorePrioritizesActivityImage;
        milestone.hasPredictableDates = cacheMilestone.hasPredictableDates;
        milestone.vendorsDisplayTitle = cacheMilestone.vendorsDisplayTitle;
        milestone.vendorHashes = cacheMilestone.vendorHashes;
        milestone.isInGameMilestone = cacheMilestone.isInGameMilestone;
        milestone.hash = cacheMilestone.hash;
        milestone.index = cacheMilestone.index;
        milestone.redacted = cacheMilestone.redacted;
        milestone.startDate = cacheMilestone.startDate;
        milestone.endDate = cacheMilestone.endDate;

        // TODO: Parse quests
        if (questsAvailable) {
          milestone.quests = [];
          Object.keys(unparsedQuests).forEach((questKey) => {
            const cacheQuest = cacheMilestone.quests[unparsedQuests[questKey].questItemHash];
            const quest: DestinyMilestoneQuestDefinition = new DestinyMilestoneQuestDefinition();

            quest.questItemHash = cacheQuest.questItemHash;
            quest.displayProperties = cacheQuest.displayProperties;
            quest.questItemDefinition = cacheQuest.questItemDefinition; // this isn't right
            quest.overrideImage = cacheQuest.overrideImage;

            const unparsedActivity = unparsedQuests[questKey].activity;
            if (unparsedActivity) {
              console.log('looking up activity for ' + unparsedActivity.activityHash);
              console.log(this.destinyCacheService.cache.Activity[unparsedActivity.activityHash]);
              quest.activities = this.parseActivity(unparsedActivity);
            }

            milestone.quests.push(quest);
          });
        }

        if (populateReturn) {
          returnArr.push(milestone);
        }
      } else {
        console.error('Error! Could not find milestone data for ' + key);
      }
    });

    console.log('return array follows');
    console.log(returnArr);
    return returnArr;
  }

  public parseActivity(unparsedActivity): DestinyMilestoneActivityDefinition {
    const activity: DestinyMilestoneActivityDefinition = new DestinyMilestoneActivityDefinition;
    const cacheActivity = this.destinyCacheService.cache.Activity[unparsedActivity.activityHash];

    activity.conceptualActivityHash = cacheActivity.hash;
    activity.conceptualActivity = new DestinyActivityDefinition;
    activity.conceptualActivity.displayProperties = cacheActivity.displayProperties;
    activity.conceptualActivity.index = cacheActivity.index;
    activity.conceptualActivity.activityTypeHash = cacheActivity.activityTypeHash;
    activity.conceptualActivity.activityLevel = cacheActivity.activityLevel;
    activity.conceptualActivity.activityLightLevel = cacheActivity.activityLightLevel;
    activity.conceptualActivity.activityModeHashes = cacheActivity.activityModeHashes;
    // activity.conceptualAcitivity.activityModes
    activity.conceptualActivity.activityModeTypes = cacheActivity.activityModeTypes;
    // activity.conceptualActivity.challenges

    const unparsedChallenges = cacheActivity.challenges;
    console.log('unparsed challenges');
    console.log(unparsedChallenges);
    if (unparsedChallenges) {
      activity.conceptualActivity.challenges = [];
      for (let  i = 0; i < unparsedChallenges.length; i++) {
        const challenge = new DestinyActivityChallengeDefinition();
        const cacheChalllenge = this.destinyCacheService.cache.Objective[unparsedChallenges[i].objectiveHash];
        console.log('cache challenge is');
        console.log(cacheChalllenge);
        challenge.objective = new DestinyObjectiveDefinition();

        challenge.objective.hash = unparsedChallenges[i].objectiveHash;
        challenge.objective.displayProperties = cacheChalllenge.displayProperties;
        challenge.objective.allowNegativeValue = cacheChalllenge.allowNegativeValue;
        challenge.objective.allowValueChangeWhenCompleted = cacheChalllenge.allowValueChangeWhenCompleted;
        challenge.objective.completionValue = cacheChalllenge.completionValue;
        challenge.objective.index = cacheChalllenge.index;
        challenge.objective.isCountingDownward = cacheChalllenge.isCountingDownward;
        challenge.objective.locationHash = cacheChalllenge.locationHash;
        challenge.objective.perks = cacheChalllenge.perks;
        challenge.objective.progressDescription = cacheChalllenge.progressDescription;
        challenge.objective.redacted = cacheChalllenge.redacted;
        challenge.objective.stats = cacheChalllenge.stats;
        challenge.objective.valueStyle = cacheChalllenge.valueStyle;

        activity.conceptualActivity.challenges.push(challenge);
      }
    }
    activity.conceptualActivity.destinationHash = cacheActivity.destinationHash;
    // activity.conceptualActivity.destination
    activity.conceptualActivity.directActivityModeHash = cacheActivity.directActivityModeHash;
    // activity.conceptualActivity.directActivityMode
    activity.conceptualActivity.directActivityModeType = cacheActivity.directActivityModeType;
    activity.conceptualActivity.matchmaking = cacheActivity.matchmaking;

    const unparsedModifiers = unparsedActivity.modifierHashes;
    if (unparsedModifiers) {
      activity.conceptualActivity.modifiers = [];

      for (let i = 0; i < unparsedActivity.modifierHashes.length; i++) {
        const cacheModifier = this.destinyCacheService.cache.ActivityModifier[unparsedModifiers[i]];
        const modifier = new DestinyActivityModifierDefinition();

        modifier.displayProperties = cacheModifier.displayProperties;
        modifier.hash = cacheModifier.hash;

        activity.conceptualActivity.modifiers.push(modifier);
      }
    }

    activity.conceptualActivity.pgcrImage = cacheActivity.pgcrImage;
    activity.conceptualActivity.playlistItems = cacheActivity.playlistItems;
    activity.conceptualActivity.redacted = cacheActivity.redacted;
    activity.conceptualActivity.releaseIcon = cacheActivity.releaseIcon;
    activity.conceptualActivity.releaseTime = cacheActivity.releaseTime;
    // activity.conceptualActivity.rewards
    activity.conceptualActivity.tier = cacheActivity.tier;
    activity.conceptualActivity.isPvP = cacheActivity.isPvP;
    activity.conceptualActivity.isPlaylist = cacheActivity.isPlaylist;

    return activity;
  }

  public parseDestinyCharacterComponent(
         unparsedCharacters: DictionaryComponentResponseOfint64AndDestinyCharacterComponent):
         DestinyCharacterComponent[] {
    const returnArr: DestinyCharacterComponent[] = [];

    Object.keys(unparsedCharacters).forEach((key: any) => {
      const character = new DestinyCharacterComponent;
      Object.assign(character, unparsedCharacters[key].data);

      returnArr.push(character);
    });

    return returnArr;
  }
}
