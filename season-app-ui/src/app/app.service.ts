import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Season} from "./season";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AppService {
  private url = 'http://localhost:8888';

  public constructor(
    private http: HttpClient
  ) { }

  public getSeason(): Observable<Season> {
    return this.http.get<Season>(this.url);
  }
}
