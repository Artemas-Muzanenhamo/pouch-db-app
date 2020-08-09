import {Injectable} from "@angular/core";
import PouchDB from 'pouchdb'
import {Observable} from "rxjs";
import {Season} from "./season";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {error} from "util";

@Injectable()
export class AppService {
  private isInstantiated: boolean;
  private database: any;
  private url = 'http://localhost:8888';
  private season: Season = new Season('');

  public constructor(
    private http: HttpClient
  ) {
    if(!this.isInstantiated) {
      this.database = new PouchDB("artemas-test-db");
      this.isInstantiated = true;
      console.log('PouchDB database created: ', this.database.name);
    }
  }

  public getSeason(): Observable<Season> {
    let seasonObservable = this.http.get<Season>(this.url);
    seasonObservable
      .subscribe(response => this.addDoc(response),
        error => console.log(error));
    return seasonObservable;
  }

  private addDoc(response: Season) {
    // let documentInDB = this.database.get('season')
    //   .catch(error => console.log('ERROR: The document is missing: ', error));
    // if (documentInDB) {
    //   this.database.destroy(documentInDB);
    // }

    return this.database.put({
      _id: 'SEASON',
      season: response
    })
      .then(() => console.log("Document created"))
      .catch(err => console.log('ERROR: ', err));
  }
}
