import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BungieService } from '../services/bungie.service';
import { ParseService } from '../services/parse.service';
import { DestinyComponentType } from '../models/general-models';
import { ADWDCharacterAndEquiped } from '../models/adwd-models';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  @Input() characters: ADWDCharacterAndEquiped[];

  constructor(private route: ActivatedRoute,
    private bungieService: BungieService,
    private parseService: ParseService) { }

  ngOnInit() {
    this.getCharactersAndEquiped();
  }

  getCharactersAndEquiped(): void {
    const memberId = this.route.snapshot.paramMap.get('memberId');
    const memberType = this.route.snapshot.paramMap.get('membershipType');
    const componentTypes = [DestinyComponentType.Characters, DestinyComponentType.CharacterEquipment];
    this.bungieService.getProfile(memberId, +memberType, componentTypes).subscribe((res) => {
      this.characters = <ADWDCharacterAndEquiped[]>this.parseService.parseDestinyCharacterComponent(res.Response.characters);
      this.characters = this.parseService.parseDestinyInventoryComponent(res.Response.characterEquipment, this.characters);
      console.log(this.characters);
    });
  }
}
