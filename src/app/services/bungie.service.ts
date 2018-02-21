import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { PublicMilestoneBungieResponse, DestinyPublicMilestone } from '../models/destiny-public-milestone';
import { BungieUserByIdBungieResponse, ProfileBungieResponse, DestinyPlayerBungieResponse } from '../models/destiny-user';
import { AuthService } from './auth.service';
// import { HttpParams } from '@angular/common/http/src/params';

@Injectable()
export class BungieService {

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  public getPublicMilestones(): Observable<PublicMilestoneBungieResponse> {
    const headers = new HttpHeaders().set('X-API-Key', environment.bungie.apiKey);

    return this.http.get<PublicMilestoneBungieResponse>(
      environment.bungie.apiUrl + 'Destiny2/Milestones/',
      { headers })
      .pipe(
        tap (res => { console.log(res); })
    );
  }

  public getBungieNetUserById(id: string): Observable<BungieUserByIdBungieResponse> {
    const headers = new HttpHeaders({
      'X-API-Key': environment.bungie.apiKey
    });

    console.log(headers);
    console.log(environment.bungie.apiUrl);

    return this.http.get<BungieUserByIdBungieResponse>(
      environment.bungie.apiUrl + 'User/GetBungieNetUserById/' + id + '/',
      { headers: headers})
      .pipe(
        tap(res => { console.log(res); })
      );
  }

  public searchDestinyPlayer(id: string, membershipType: number): Observable<DestinyPlayerBungieResponse> {
    const headers = new HttpHeaders({
      'X-API-Key': environment.bungie.apiKey
    });

    console.log(headers);
    console.log(environment.bungie.apiUrl);

    return this.http.get<DestinyPlayerBungieResponse>(
      environment.bungie.apiUrl + 'Destiny2/SearchDestinyPlayer/' + membershipType + '/' + id + '/',
      { headers: headers })
      .pipe(
      tap(res => { console.log(res); })
      );
  }

  public getProfile(id: string, memberType: number, componentType: number): Observable<ProfileBungieResponse> {
    const headers = new HttpHeaders({
      'X-API-Key': environment.bungie.apiKey //,
      // 'Authorization': this.authService.authInfo.header
    });
    const options = {
      params: new HttpParams().set('components', componentType.toString()),
      headers: headers
    };

    return this.http.get<ProfileBungieResponse>(
      environment.bungie.apiUrl + 'Destiny2/' + memberType + '/Profile/' + id + '/', options)
      .pipe(
        tap(res => { console.log(res); })
      );
  }
}
