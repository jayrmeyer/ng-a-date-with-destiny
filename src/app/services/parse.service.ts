import { Injectable } from '@angular/core';

import { DestinyCacheService } from './destiny-cache.service';
import '../models/destiny-public-milestone';
import { DestinyPublicMilestone, PublicMilestone } from '../models/destiny-public-milestone';

@Injectable()
export class ParseService {

  constructor(private destinyCacheService: DestinyCacheService) { }

  public parseMilestones(unparsedMilestones: DestinyPublicMilestone[]): PublicMilestone[] {
    let returnArr: PublicMilestone[] = [];

    Object.keys(unparsedMilestones).forEach((key: any) => {
      let milestone: PublicMilestone = new PublicMilestone();

      console.log('current key: ' + key);
      if (!this.destinyCacheService) {
        console.error('destinyCacheService is null!');
      }
      if (!this.destinyCacheService.cache) {
        console.error('destinyCacheService.cache is null!');
      }
      if (this.destinyCacheService.cache.Milestone[unparsedMilestones[key].milestoneHash]) {
        console.log(this.destinyCacheService.cache.Milestone[unparsedMilestones[key].milestoneHash]);
        milestone.displayProperties = this.destinyCacheService.cache.Milestone[unparsedMilestones[key].milestoneHash].displayProperties;
        // this.destinyCacheService.cache.Milestone

        returnArr.push(milestone);
      } else {
        console.error('Error! Could not find milestone data for ' + key);
      }
    });

    console.log('return array follows');
    console.log(returnArr);
    return returnArr;
  }
}
