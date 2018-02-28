import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BungieService } from '../services/bungie.service';
import { AuthService } from '../services/auth.service';
import { ParseService } from '../services/parse.service';
import { DestinyCharacterComponent } from '../models/destiny-user';
import { DestinyComponentType } from '../models/general-models';
import { DestinyProgressionDefinition } from '../models/destiny-definitions';
import { DestinyCharacterProgressionComponent} from '../models/destiny-character';
import { ADWDCharacter, ADWDCharacterAndProgression } from '../models/adwd-models';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  @Input() characters: ADWDCharacterAndProgression[];
  // @Input() characters: DestinyCharacterComponent[];
  // @Input() progressions: DestinyCharacterProgressionComponent[];

  constructor(private route: ActivatedRoute,
              private bungieService: BungieService,
              private authService: AuthService,
              private parseService: ParseService) { }

  ngOnInit() {
    this.getCharactersAndProgressions();
  }

  getCharactersAndProgressions(): void {
    const memberId = this.route.snapshot.paramMap.get('memberId');
    const memberType = this.route.snapshot.paramMap.get('membershipType');
    const componentTypes = [DestinyComponentType.Characters, DestinyComponentType.CharacterProgressions];

    this.bungieService.getProfile(memberId, +memberType, componentTypes).subscribe((res) => {
      this.characters = <ADWDCharacterAndProgression[]>this.parseService.parseDestinyCharacterComponent(res.Response.characters);
      this.characters = this.parseService.parseDestinyCharacterProgressionComponent(res.Response.characterProgressions, this.characters);
      console.log(this.characters);
    });
  }

}
