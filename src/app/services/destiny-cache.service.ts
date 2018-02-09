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
          reject(err);
        }
        let zip = new JSZip();
        zip.loadAsync(data).then((zip) => {
          zip.file("destiny2.json").async("string").then((data) => {
            this.cache = JSON.parse(data);
          });
        });
      });
    });
  }
}
