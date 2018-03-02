import { Injectable } from '@angular/core';

import { DestinyCacheService } from './destiny-cache.service';
import '../models/destiny-public-milestone';
import { Milestone } from '../models/destiny-public-milestone';
import { DestinyCharacterProgressionComponent } from '../models/destiny-character';
import { DictionaryComponentResponseOfint64AndDestinyCharacterComponent,
         DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent,
         DestinyCharacterComponent} from '../models/destiny-user';
import { DestinyObjectiveDefinition,
         DestinyActivityDefinition,
         DestinyActivityModifierDefinition,
         DestinyActivityChallengeDefinition,
         DestinyMilestoneQuestDefinition,
         DestinyMilestoneActivityDefinition } from '../models/destiny-definitions';
import {
  DestinyPublicMilestone,
  DestinyMilestone,
  DestinyMilestoneQuest,
  DestinyPublicMilestoneActivity } from '../models/destiny-milestones';
import { DestinyProgression } from '../models/destiny';
import { ADWDCharacter, ADWDCharacterAndProgression } from '../models/adwd-models';
import { DestinyQuestStatus, DestinyObjectiveProgress } from '../models/destiny-quests';

const CONTENT_BASE_URL = 'http://www.bungie.net/';

@Injectable()
export class ParseService {

  constructor(private destinyCacheService: DestinyCacheService) { }

  public parsePublicMilestones(unparsedMilestones: DestinyPublicMilestone[]): Milestone[] {
    const returnArr: Milestone[] = [];
    let populateReturn = true;
    let questsAvailable = true;

    Object.keys(unparsedMilestones).forEach((key: any) => {
      const milestone: Milestone = new Milestone();

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

    return returnArr;
  }

  public parseActivity(unparsedActivity): DestinyMilestoneActivityDefinition {
    const activity: DestinyMilestoneActivityDefinition = new DestinyMilestoneActivityDefinition;
    const cacheActivity = this.destinyCacheService.cache.Activity[unparsedActivity.activityHash];

    activity.conceptualActivityHash = cacheActivity.hash;
    activity.conceptualActivity = new DestinyActivityDefinition();
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
    if (unparsedChallenges) {
      activity.conceptualActivity.challenges = [];
      for (let  i = 0; i < unparsedChallenges.length; i++) {
        const challenge = new DestinyActivityChallengeDefinition();
        const cacheChalllenge = this.destinyCacheService.cache.Objective[unparsedChallenges[i].objectiveHash];
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
         ADWDCharacter[] {
    const returnArr: ADWDCharacter[] = [];

    Object.keys(unparsedCharacters.data).forEach((key: any) => {
      const character = new ADWDCharacter();
      Object.assign(character, unparsedCharacters.data[key]);

      character.class = this.destinyCacheService.cache.Class[unparsedCharacters.data[key].classHash];
      character.gender = this.destinyCacheService.cache.Gender[unparsedCharacters.data[key].genderHash];
      character.race = this.destinyCacheService.cache.Race[unparsedCharacters.data[key].raceHash];
      character.emblem = this.destinyCacheService.cache.InventoryItem[character.emblemHash];

      returnArr.push(character);
    });

    return returnArr;
  }

  public parseDestinyCharacterProgressionComponent(
      unparsedProgressions: DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent,
      characters: ADWDCharacterAndProgression[]):
      ADWDCharacterAndProgression[] {
    const returnHash = {};

    for (const character of characters) {

      const unparsedCharacter = unparsedProgressions.data[character.characterId];

      // Progressions
      character.progressions = [];
      Object.keys(unparsedCharacter.progressions).forEach((key: any) => {
        const progression = new DestinyProgression;
        Object.assign(progression, unparsedCharacter.progressions[key]);
        progression.progression = this.destinyCacheService.cache.Progression[unparsedCharacter.progressions[key].progressionHash];
        character.progressions.push(progression);
      });

      // Milestones
      character.milestones = [];
      Object.keys(unparsedCharacter.milestones).forEach((key: any) => {
        character.milestones.push(this.parseDestinyMilestone(unparsedCharacter.milestones[key]));
      });

    }

    return characters;
    }

    public parseDestinyPublicMilestones(unparsedMilestones: DestinyPublicMilestone[]): DestinyPublicMilestone[] {
      const returnArr: DestinyPublicMilestone[] = [];

      Object.keys(unparsedMilestones).forEach((key: any) => {
        const milestone = new DestinyPublicMilestone;
        Object.assign(milestone, unparsedMilestones[key]);

        milestone.milestone = this.destinyCacheService.cache.Milestone[milestone.milestoneHash];

        // parse quests
        if (milestone.availableQuests) {
          for (const quest of milestone.availableQuests) {
            console.log('assigning quest');
            quest.questItem = this.destinyCacheService.cache.InventoryItem[quest.questItemHash];
            if (quest.activity) {
              this.parseDestinyPublicMilestoneActivity(quest.activity);
            }
          }
        }

        returnArr.push(milestone);
      });

      return returnArr;
    }

    public parseDestinyProgressions(unparsedProgressions: DestinyProgression): DestinyProgression[] {
      const returnArr: DestinyProgression[] = [];

      Object.keys(unparsedProgressions).forEach((key: any) => {
        const destinyProgression: DestinyProgression = unparsedProgressions[key];
        destinyProgression.progression = this.destinyCacheService.cache.Progression[key];
        returnArr.push(destinyProgression);
      });

      return returnArr;
    }

    public parseDestinyMilestone(unparsedMilestone: DestinyMilestone): DestinyMilestone {
      const milestone = new DestinyMilestone;
      Object.assign(milestone, unparsedMilestone);
      milestone.milestone = this.destinyCacheService.cache.Milestone[milestone.milestoneHash];
      if (milestone.availableQuests) {
        for (const quest of milestone.availableQuests) {
          this.parseDestinyMilestoneQuest(quest);
        }
      }

      // TODO: parse vendors

      // TODO: parse rewards

      return milestone;
    }

    public parseDestinyMilestoneQuest(unparsedMilestoneQuest: DestinyMilestoneQuest): DestinyMilestoneQuest {
      unparsedMilestoneQuest.questItem = this.destinyCacheService.cache.InventoryItem[unparsedMilestoneQuest.questItemHash];

      this.parseDestinyQuestStatus(unparsedMilestoneQuest.status);

      // TODO: parse activity

      // TODO: parse challenges

      return unparsedMilestoneQuest;
    }

    public parseDestinyQuestStatus(status: DestinyQuestStatus): DestinyQuestStatus {
      status.quest = this.destinyCacheService.cache.InventoryItem[status.questHash];
      status.step = this.destinyCacheService.cache.InventoryItem[status.stepHash];

      if (status.stepObjectives) {
        for (const objective of status.stepObjectives) {
          this.parseDestinyObjectiveProgress(objective);
        }
      }

      return status;
    }

    public parseDestinyObjectiveProgress(objectiveProgress: DestinyObjectiveProgress): DestinyObjectiveProgress {
      objectiveProgress.objective = this.destinyCacheService.cache.Objective[objectiveProgress.objectiveHash];

      // TODO: parse destination - don't see in manifest

      objectiveProgress.activity = this.destinyCacheService.cache.Activity[objectiveProgress.activityHash];

      return objectiveProgress;
    }

    public parseDestinyPublicMilestoneActivity(activity: DestinyPublicMilestoneActivity): DestinyPublicMilestoneActivity {
      console.log('parsing activity');
      console.log(activity);
      activity.activity = this.destinyCacheService.cache.Activity[activity.activityHash];

      if (activity.modifierHashes) {
        activity.modifiers = [];
        for (const modifierHash of activity.modifierHashes) {
          activity.modifiers.push(<DestinyActivityModifierDefinition>this.destinyCacheService.cache.ActivityModifier[modifierHash]);
        }
      }

      // TODO: parse variants

      activity.activityMode = this.destinyCacheService.cache.ActivityMode[activity.activityModeHash];
      return activity;
    }
}
