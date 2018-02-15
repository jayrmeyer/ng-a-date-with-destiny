import { Injectable } from '@angular/core';

import { DestinyCacheService } from './destiny-cache.service';
import '../models/destiny-public-milestone';
import { DestinyPublicMilestone, PublicMilestone } from '../models/destiny-public-milestone';

const CONTENT_BASE_URL = "http://www.bungie.net/";

@Injectable()
export class ParseService {

  constructor(private destinyCacheService: DestinyCacheService) { }

  public parseMilestones(unparsedMilestones: DestinyPublicMilestone[]): PublicMilestone[] {
    let returnArr: PublicMilestone[] = [];
    let populateReturn = true;
    let questsAvailable = true;

    Object.keys(unparsedMilestones).forEach((key: any) => {
      let milestone: PublicMilestone = new PublicMilestone();

      console.log('current milestone key: ' + key);
      console.log('current unparsed milestone is');
      console.log(unparsedMilestones[key]);

      const unparsedQuests = unparsedMilestones[key].availableQuests;
      if (!unparsedQuests) {
        questsAvailable = false;
      }

      const cacheMilestone = this.destinyCacheService.cache.Milestone[unparsedMilestones[key].milestoneHash];


      // check to see if we can find the milestone in the cache; if not log an error to the console
      if (cacheMilestone) {
        console.log('cache for current milestone is');
        console.log(cacheMilestone);

        // find display properties
        if (cacheMilestone.displayProperties) {
          console.log('using milestone data');
          milestone.displayProperties = cacheMilestone.displayProperties;
        } else {
          console.log('attempting to use quest data');
          if (questsAvailable) {
            console.log('found quests');
            milestone.displayProperties = cacheMilestone.quests[unparsedMilestones[key].availableQuests[0].questItemHash].displayProperties;
          } else {
            console.error('no display properities found for ' + key);
            populateReturn = false;
          }
        }

        // populate image
        milestone.image = CONTENT_BASE_URL + cacheMilestone.image;

        // TODO: Parse activities
        if (questsAvailable) {
          console.log('getting activities');
          Object.keys(unparsedQuests).forEach((questKey) => {
            console.log('activity is ');
            console.log(unparsedQuests[questKey]);
          });
        }

        // TODO: Parse modifiers

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
}
