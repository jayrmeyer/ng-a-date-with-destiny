import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { publishBehavior } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  private authManager_: BehaviorSubject<AuthInfo>
    = new BehaviorSubject(new AuthInfo());
  private authInfo = new AuthInfo();
  authChange: Observable<AuthInfo>;
  token: Token;

  constructor(private http: HttpClient) {
    this.authChange = this.authManager_.asObservable();
  }

  /* Following method will reroute to the bungie auth page */
  public static rerouteToAuthPage(): void {
    console.log('reroute to bungie auth page');
    const loginCheckString = AuthService.randomString(10);
    localStorage.setItem('loginCheckString', loginCheckString);
    const url = environment.bungie.authUrl
                + '?client_id='
                + environment.bungie.clientId
                + '&response_type=code&state='
                + loginCheckString;
    window.location.href = url;
  }

  private static randomString(length: number): string {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  private static cookToken(aToken: Token): Token {
    aToken.inception = new Date().getTime();
    aToken.expiration = aToken.inception + (aToken.expires_in * 1000);
    aToken.refresh_expiration = aToken.inception + (aToken.refresh_expires_in * 1000);

    return aToken;
  }

  login(): void {
    this.setAuthState_(AuthState.LoggedIn);
  }

  logout(): void {
    this.setAuthState_(AuthState.LoggedOut);
  }

  emitAuthState(): void {
    this.authManager_.next(this.authInfo);
  }

  setAuthState_(newAuthInfo: AuthInfo): void {
    this.authInfo = newAuthInfo;
    this.emitAuthState();
  }

  public getTokenFromBungie(code: string, state: string): Observable<Token> {
    const loginCheckString = localStorage.getItem('loginCheckString');
    if (loginCheckString) {
      if (loginCheckString !== state) {
        localStorage.removeItem('loginCheckString');
        throw new Error('State did not match on OAuth call');
      }
    }

    const headers = new HttpHeaders().set('X-API-Key', environment.bungie.apiKey);

    return this.http.post<Token>(environment.bungie.apiUrl + 'App/OAuth/Token/', {
        client_id: environment.bungie.clientId,
        grant_type: 'authorization_code',
        code: code},
        { headers }).pipe(
          tap((res) => {
            this.storeToken(<Token>res, true);
          })
        );
  }

  private emit(): void {
    if (!this.token) {

    }
  }
  private storeToken(token: Token, cook: boolean): void {
    if (cook) {
      AuthService.cookToken(token);
      localStorage.setItem('authorization', JSON.stringify(token));
      this.token = token;
    }
  }

}

export const enum AuthState {
  LoggedIn,
  LoggedOut
}

export interface Token {
  // cooked
  inception: number; // ((new Date()).getTime()
  expiration: number; // ms of actual
  refresh_expiration: number; // ms of actual

  expires_in: number; // seconds til
  refresh_expires_in: number; // seconds til

  access_token: string;
  token_type: string;
  refresh_token: string;
  membership_id: string;
}

export class AuthInfo {
  loggedIn: boolean;
  header: string;
  memberId: string;

  constructor() {
    this.loggedIn = false;
    this.header = null;
    this.memberId = null;
  }
}