import { Injectable } from '@angular/core';

import { DestinyCacheService } from './destiny-cache.service';
import '../models/destiny-public-milestone';
import { DestinyPublicMilestone, PublicMilestone } from '../models/destiny-public-milestone';
import { Logger } from 'angular2-logger/core';

@Injectable()
export class ParseService {

  constructor(private destinyCacheService: DestinyCacheService) { }

  public parseMilestones(unparsedMilestones: DestinyPublicMilestone[]): PublicMilestone[] {
    let returnArr: PublicMilestone[] = [];

    Object.keys(unparsedMilestones).forEach((key: any) => {
      let milestone: PublicMilestone = new PublicMilestone();

      console.log('current key: ' + key);
      if (this.destinyCacheService.cache.Milestone[unparsedMilestones[key].milestoneHash]) {
        console.log(this.destinyCacheService.cache.Milestone[unparsedMilestones[key].milestoneHash]);
        milestone.displayProperties = this.destinyCacheService.cache.Milestone[unparsedMilestones[key].milestoneHash].displayProperties;
        // this.destinyCacheService.cache.Milestone

        returnArr.push(milestone);
      } else {
        console.log('Error! ' + key);
      }
    });

    console.log('return array follows');
    console.log(returnArr);
    return returnArr;
  }
}
