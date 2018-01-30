import { Injectable } from '@angular/core';
import { Headers, Http, RequestMethod, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Nightfall } from '../models/nightfall';

import { environment } from '../../environments/environment';

const API_ROOT: string = "https://www.bungie.net/Platform/";


@Injectable()
export class BungieService {

  constructor(private http: Http) { }

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

}
