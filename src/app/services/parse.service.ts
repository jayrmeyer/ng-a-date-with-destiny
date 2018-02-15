import { Injectable } from '@angular/core';

import { DestinyCacheService } from './destiny-cache.service';
import '../models/destiny-public-milestone';
import { DestinyPublicMilestone, PublicMilestone } from '../models/destiny-public-milestone';

@Injectable()
export class ParseService {

  constructor(private destinyCacheService: DestinyCacheService) { }

  public parseMilestones(unparsedMilestones: DestinyPublicMilestone[]): PublicMilestone[] {
    let returnArr: PublicMilestone[] = [];
    let populateReturn = true;

    Object.keys(unparsedMilestones).forEach((key: any) => {
      let milestone: PublicMilestone = new PublicMilestone();

      console.log('current milestone key: ' + key);
      console.log('current unparsed milestone is');
      console.log(unparsedMilestones[key]);

      const cacheMilestone = this.destinyCacheService.cache.Milestone[unparsedMilestones[key].milestoneHash];


      // check to see if we can find the milestone in the cache; if not log an error to the console
      if (cacheMilestone) {
        console.log('cache for current milestone is');
        console.log(cacheMilestone);

        if (cacheMilestone.displayProperties) {
          console.log('using milestone data');
          milestone.displayProperties = cacheMilestone.displayProperties;
        } else {
          console.log('attempting to use quest data');
          if (unparsedMilestones[key].availableQuests) {
            console.log('found quests');
            milestone.displayProperties = cacheMilestone.quests[unparsedMilestones[key].availableQuests[0].questItemHash].displayProperties;
          } else {
            console.error('no display properities found for ' + key);
            populateReturn = false;
          }
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
}
