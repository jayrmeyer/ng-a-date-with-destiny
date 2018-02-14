import { Injectable } from '@angular/core';

import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';

@Injectable()
export class DestinyCacheService {
  public cache: any;

  constructor() { }

  init(): Promise<any> {
    return new JSZip.external.Promise((resolve, reject) => {
      JSZipUtils.getBinaryContent('/assets/destiny2.zip', (err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        console.log('in cache service, zip found');
        let zip = new JSZip();
        zip.loadAsync(data).then((zip) => {
          zip.file("destiny2.json").async("string").then((data) => {
            console.log('in cache service, json loaded');
            this.cache = JSON.parse(data);
            console.log('in cache service, json parsed');
            resolve();
            return;
          },
          (err) => {
            reject(err);
            return;
          });
        });
      });
    });
  }
}
