import { Component } from '@angular/core';
import { DestinyCacheService } from './services/destiny-cache.service';
import { BungieService } from './services/bungie.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'A Date With Destiny';

  constructor(private bungieService: BungieService,
    private destinyCacheService: DestinyCacheService) {

    }

  ngOnInit(): void {
    this.destinyCacheService.init();
  }
}
