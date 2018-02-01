import { Component, OnInit } from '@angular/core';
import { BungieService } from '../services/bungie.service';
import { Observable } from 'rxjs/Observable';
import { BungieResponse } from '../models/nightfall';

@Component({
  selector: 'app-current-nightfall',
  templateUrl: './current-nightfall.component.html',
  styleUrls: ['./current-nightfall.component.css']
})
export class CurrentNightfallComponent implements OnInit {
  response: BungieResponse;

  constructor(private bungieService: BungieService) { }

  ngOnInit() {
    this.getNightfall();
  }

  getNightfall(): void {
    this.bungieService.getNightfall();
      // .subscribe(response => this.response = response);

    console.log('message response: ' + this.response);
  }

}
