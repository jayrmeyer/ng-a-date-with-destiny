import { Component } from '@angular/core';
import { DestinyCacheService } from './services/destiny-cache.service';
import { BungieService } from './services/bungie.service';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

import { AuthService, AuthState, AuthInfo } from './services/auth.service';
import { BungieUserByIdBungieResponse, DestinyGeneralUser, UserInfoCard } from './models/destiny-user';
import { LoggedInUserService } from './services/logged-in-user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'A Date With Destiny';

  loggedIn = true;
  loggedInUserInfoCard: UserInfoCard;
  authInfo: AuthInfo;
  private authChangeSubscription: Subscription;

  constructor(private bungieService: BungieService,
    private destinyCacheService: DestinyCacheService,
    private authService: AuthService,
    private loggedInUserService: LoggedInUserService) {

      this.authChangeSubscription = authService.authChange.subscribe(newAuthInfo => {
        this.loggedIn = newAuthInfo.loggedIn;
        this.authInfo = newAuthInfo;
      });
    }

  ngOnInit(): void {
    console.log('in AppComponent.ngOnInit, about to load cache');
    this.destinyCacheService.init().then(() => {
      console.log('in AppComponent.ngOnInit, cache loaded');
    });
  }

  ngOnDestroy(): void {
    this.authChangeSubscription.unsubscribe();
  }

  onLoginClick(): void {
    console.log('clicked login');
    this.authService.login();

    // load bungie user info for logged in user for use in other services
    if (this.authInfo) {
      this.bungieService.getBungieNetUserById(this.authInfo.memberId).subscribe((res) => {
        this.bungieService.searchDestinyPlayer(res.Response.displayName, -1).subscribe((res1) => {
          this.loggedInUserService.loggedInUserInfoCard = res1.Response[0];
          this.loggedInUserInfoCard = res1.Response[0];
        });
      });
    }
  }

  onLogoutClick(): void {
    console.log('clicked logout');
    this.authService.logout();
  }
}
