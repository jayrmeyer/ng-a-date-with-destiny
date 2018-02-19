import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { Nightfall, BungieResponse } from '../models/nightfall';

import { environment } from '../../environments/environment';
import { DestinyPublicMilestone } from '../models/destiny-public-milestone';

@Injectable()
export class BungieService {
  res: BungieResponse;

  constructor(private http: HttpClient) { }

  public getNightfall(): Observable<BungieResponse> {
    const self: BungieService = this;

    const headers = new HttpHeaders().set('X-API-Key', environment.bungie.apiKey);

    console.log('calling bungie');
    return this.http
      .get<BungieResponse>(
        environment.bungie.apiUrl + 'Destiny2/Milestones/',
        { headers })
      .pipe(
          tap (res => { console.log(res); }
        )
      );
  }

  public getPublicMilestones(): Observable<BungieResponse> {
    const headers = new HttpHeaders().set('X-API-Key', environment.bungie.apiKey);

    return this.http.get<BungieResponse>(
      environment.bungie.apiUrl + 'Destiny2/Milestones/',
      { headers })
      .pipe(
        tap (res => { console.log(res); })
    );
  }
}
