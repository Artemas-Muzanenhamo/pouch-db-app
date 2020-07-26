import {Injectable} from "@angular/core";
import PouchDB from 'pouchdb'

@Injectable()
export class AppService {
  private isInstantiated: boolean;
  private database: any;

  public constructor() {
    if(!this.isInstantiated) {
      this.database = new PouchDB("artemas-test-db");
      this.isInstantiated = true;
    }
  }
}
