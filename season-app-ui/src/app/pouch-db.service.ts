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
    // check if document is in DB
    return this.database.get("SEASON")
      .then(response => this.documentInDB = response)
      .then(() => this.doesDocumentExistInPouchDb(season))
      .then(document => console.log('UPDATED DOCUMENT: ', document)) // TODO: Update the document.
      .catch(error => {
        console.error('ERROR: The document is missing: ', error);
        this.addToPouchDB(season);
      });
  }

  private addToPouchDB(season: Season) {
    this.database.put({
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
