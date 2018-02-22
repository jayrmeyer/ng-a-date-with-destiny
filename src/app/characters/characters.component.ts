import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BungieService } from '../services/bungie.service';
import { AuthService } from '../services/auth.service';
import { ParseService } from '../services/parse.service';
import { DestinyCharacterComponent } from '../models/destiny-user';
import { DestinyComponentType } from '../models/general-models';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  @Input() characters: DestinyCharacterComponent[];

  constructor(private route: ActivatedRoute,
              private bungieService: BungieService,
              private authService: AuthService,
              private parseService: ParseService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    const memberId = this.route.snapshot.paramMap.get('memberId');
    const memberType = this.route.snapshot.paramMap.get('membershipType');

    this.bungieService.getProfile(memberId, +memberType, DestinyComponentType.Characters).subscribe((res) => {
      this.characters = this.parseService.parseDestinyCharacterComponent(res.Response.characters);
      console.log(this.characters);
    });
  }

}
