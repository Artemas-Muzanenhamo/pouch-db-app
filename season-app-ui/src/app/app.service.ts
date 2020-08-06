import {Injectable} from "@angular/core";
import PouchDB from 'pouchdb'
import {Observable} from "rxjs";
import {Season} from "./season";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class AppService {
  private isInstantiated: boolean;
  private database: any;
  private url = 'http://localhost:8888';

  public constructor(
    private http: HttpClient
  ) {
    if(!this.isInstantiated) {
      this.database = new PouchDB("artemas-test-db");
      this.isInstantiated = true;
    }
  }

  public getSeason(): Observable<Season> {
    return this.http.get<Season>(this.url);
  }
}
