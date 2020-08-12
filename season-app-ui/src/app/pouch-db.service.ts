import {Injectable} from "@angular/core";
import {Season} from "./season";
import PouchDB from 'pouchdb'

@Injectable()
export class PouchDbService {
  private readonly isInstantiated: boolean;
  private database: any;
  private documentInDB;

  constructor() {
    if (!this.isInstantiated) {
      this.database = new PouchDB("artemas-test-db");
      this.isInstantiated = true;
      console.log('PouchDB database created: ', this.database.name);
    }
  }

  public addDoc(season: Season) {
    this.database.get("SEASON")
      .then(response => this.documentInDB = response)
      .then(() => this.doesDocumentExistInPouchDb(season))
      .catch(error => console.error('ERROR: The document is missing: ', error));

    return this.database.put({
      _id: "SEASON",
      season: season
    })
      .then(() => console.log("Document created"))
      .catch(err => console.error('ERROR: ', err));
  }

  private doesDocumentExistInPouchDb(season: Season) {
    if (this.documentInDB) {
      return this.documentInDB.season = season;
    }
  }
}
