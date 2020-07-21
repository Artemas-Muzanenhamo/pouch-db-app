import {Injectable} from "@angular/core";
import PouchDB from 'pouchdb';

@Injectable()
export class AppService {
  private db: any;

  public constructor() {
    // this.db = new PouchDB('artemas-test-db');
  }
}
