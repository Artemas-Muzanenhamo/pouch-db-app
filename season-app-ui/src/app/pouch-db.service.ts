import {Injectable} from "@angular/core";
import {Season} from "./season";
import PouchDB from 'pouchdb'

@Injectable()
export class PouchDbService {
  private readonly isInstantiated: boolean;
  private database: any;

  constructor() {
    if (!this.isInstantiated) {
      this.database = new PouchDB("artemas-test-db");
      this.isInstantiated = true;
      console.log('PouchDB database created: ', this.database.name);
    }
  }

  public addDoc(season: Season) {
    // let documentInDB = this.database.get('season')
    //   .catch(error => console.log('ERROR: The document is missing: ', error));
    // if (documentInDB) {
    //   this.database.destroy(documentInDB);
    // }

    return this.database.put({
      _id: 'SEASON',
      season: season
    })
      .then(() => console.log("Document created"))
      .catch(err => console.log('ERROR: ', err));
  }
}
