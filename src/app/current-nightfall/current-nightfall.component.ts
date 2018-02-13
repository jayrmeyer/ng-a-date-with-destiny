import { Component, OnInit } from '@angular/core';
import { BungieService } from '../services/bungie.service';
import { Observable } from 'rxjs/Observable';
import { BungieResponse } from '../models/nightfall';
import '../models/destiny-public-milestone';
import { DestinyPublicMilestone } from '../models/destiny-public-milestone';

@Component({
  selector: 'app-current-nightfall',
  templateUrl: './current-nightfall.component.html',
  styleUrls: ['./current-nightfall.component.css']
})
export class CurrentNightfallComponent implements OnInit {
  resp: BungieResponse;
  publicMilestones: DestinyPublicMilestone[];
  public arrayOfKeys;

  constructor(private bungieService: BungieService) { }

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
        this.arrayOfKeys = Object.keys(this.publicMilestones);
        console.log('in getPublicMilestones, response is ');
        console.log(response.Response);
        console.log(this.publicMilestones[202035466]);
        console.log(this.publicMilestones[463010297]);
        console.log('array size: ' + this.publicMilestones);
      });
  }

}
