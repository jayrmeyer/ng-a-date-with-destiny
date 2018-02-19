import { Component, OnInit } from '@angular/core';
import { BungieService } from '../services/bungie.service';
import { Observable } from 'rxjs/Observable';
import { BungieResponse } from '../models/nightfall';
import '../models/destiny-public-milestone';
import { DestinyPublicMilestone, PublicMilestone } from '../models/destiny-public-milestone';
import { ParseService } from '../services/parse.service';

@Component({
  selector: 'app-public-milestones',
  templateUrl: './public-milestones.component.html',
  styleUrls: ['./public-milestones.component.css']
})
export class PublicMilestonesComponent implements OnInit {
  resp: BungieResponse;
  publicMilestones: DestinyPublicMilestone[];
  milestones: PublicMilestone[];

  constructor(private bungieService: BungieService, private parseService: ParseService) { }

  ngOnInit() {
    // this.getNightfall();
    this.getPublicMilestones();
  }

  getNightfall(): void {
    this.bungieService.getNightfall()
       .subscribe(response => {
         this.resp = response;
      });
  }

  getPublicMilestones(): void {
    this.bungieService.getPublicMilestones()
      .subscribe(response => {
        this.publicMilestones = response.Response;
        this.milestones = this.parseService.parseMilestones(response.Response);
      });
  }

  getIcon(icon): string {
    return 'url(//www.bungie.net' + icon + ')';
  }
}
