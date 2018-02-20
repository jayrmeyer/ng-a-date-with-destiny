import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BungieService } from '../services/bungie.service';
import { AuthService } from '../services/auth.service';
import { DestinyGeneralUser } from '../models/destiny-user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() bungieUser: DestinyGeneralUser;

  constructor(private route: ActivatedRoute,
              private bungieService: BungieService,
              private authService: AuthService) { }

  ngOnInit() {
    this.getBungieNetUserDetails();
  }

  getBungieNetUserDetails(): void {
    const memberId = this.route.snapshot.paramMap.get('memberId');
    console.log('in user-info.component, memberId is ' + memberId);

    this.bungieService.getBungieNetUserById(memberId).subscribe((res) => {
      this.bungieUser = res.Response;
    });
  }

}
