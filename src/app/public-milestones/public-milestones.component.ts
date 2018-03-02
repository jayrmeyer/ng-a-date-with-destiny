import { Component, OnInit } from '@angular/core';
import { BungieService } from '../services/bungie.service';
import { Observable } from 'rxjs/Observable';
import { PublicMilestoneBungieResponse } from '../models/destiny-public-milestone';
import { DestinyPublicMilestone } from '../models/destiny-milestones';
import { ParseService } from '../services/parse.service';

@Component({
  selector: 'app-public-milestones',
  templateUrl: './public-milestones.component.html',
  styleUrls: ['./public-milestones.component.css']
})
export class PublicMilestonesComponent implements OnInit {
  resp: PublicMilestoneBungieResponse;
  publicMilestones: DestinyPublicMilestone[];
  milestones: DestinyPublicMilestone[];

  constructor(private bungieService: BungieService, private parseService: ParseService) { }

  ngOnInit() {
    this.getPublicMilestones();
  }

  getPublicMilestones(): void {
    this.bungieService.getPublicMilestones()
      .subscribe(response => {
        this.publicMilestones = response.Response;
        this.milestones = this.parseService.parseDestinyPublicMilestones(response.Response);
        console.log(this.milestones);
      });
  }

  getIcon(icon): string {
    return 'url(//www.bungie.net' + icon + ')';
  }
}
