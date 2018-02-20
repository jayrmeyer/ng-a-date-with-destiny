import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { PublicMilestoneBungieResponse, DestinyPublicMilestone } from '../models/destiny-public-milestone';
import { BungieUserByIdBungieResponse } from '../models/destiny-user';
import { AuthService } from './auth.service';

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
      'X-API-Key': environment.bungie.apiKey,
      'Authorization': this.authService.authInfo.header
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
}
