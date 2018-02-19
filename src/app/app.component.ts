import { Component } from '@angular/core';
import { DestinyCacheService } from './services/destiny-cache.service';
import { BungieService } from './services/bungie.service';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

import { AuthService, AuthState } from './services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'A Date With Destiny';

  loggedIn = true;
  private authChangeSubscription: Subscription;

  constructor(private bungieService: BungieService,
    private destinyCacheService: DestinyCacheService,
    private authService: AuthService) {

      this.authChangeSubscription = authService.authChange.subscribe(newAuthState =>
        this.loggedIn = (newAuthState === AuthState.LoggedIn));
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
  }

  onLogoutClick(): void {
    console.log('clicked logout');
    this.authService.logout();
  }
}
