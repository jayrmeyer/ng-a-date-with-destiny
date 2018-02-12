import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { Nightfall, BungieResponse } from '../models/nightfall';

import { environment } from '../../environments/environment';

const API_ROOT: string = "https://www.bungie.net/Platform/";


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
        API_ROOT + 'Destiny2/Milestones/',
        { headers })
      .pipe(
          tap (res => { console.log(res); }
        )
      );
/*
    this.http
      .get(
      API_ROOT + 'Destiny2/Milestones/',
      { headers }).subscribe(
      res => { console.log(res); },
      err => console.error(err),
      () => console.log('done calling bungie')
      );
*/
    //return this.res;
  }

  private parseBungieResponse(j: any): any {
    if (j.ErrorCode && j.ErrorCode !== 1) {
      throw new Error(j.Message);
    }
    if (!j.ErrorCode) {
      throw new Error("Unexpected response from Bungie");
    }
    return j.Response;
  }



  /*
  public getNightfall(): Promise<Nightfall> {
    const self: BungieService = this;
    return this.buildReqOptions().then(opt => {
        return this.http.get(API_ROOT + 'Destiny2/Milestones/', opt).map(
            function (res) {
                const j: any = res.json();
                const resp = BungieService.parseBungieResponse(j);
                return self.parseService.parseNightfall(resp);
            }).toPromise().catch(
            function (err) {
                console.log('Error getting nightfall');
                console.dir(err);
                return null;
            });
    });
  }

  private buildReqOptions(): Promise<RequestOptions> {
    return this.authService.getKey().then(x => {
        if (x == null) {
            return new RequestOptions(
                {
                    method: RequestMethod.Get,
                    responseType: ResponseContentType.Json,
                    headers: new Headers({
                        'X-API-Key': environment.bungie.apiKey,
                    })
                });
        } else {
            return new RequestOptions(
                {
                    method: RequestMethod.Get,
                    responseType: ResponseContentType.Json,
                    headers: new Headers({
                        'X-API-Key': environment.bungie.apiKey,
                        'Authorization': "Bearer " + x
                    })
                });
        }
    }).catch(err => {
        console.dir(err);
        return new RequestOptions(
            {
                method: RequestMethod.Get,
                responseType: ResponseContentType.Json,
                headers: new Headers({
                    'X-API-Key': environment.bungie.apiKey,
                })
            });

    });
  }
  */

}
