import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {Season} from "./season";
import {PouchDbService} from "./pouch-db.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RANDOM SEASON OF THE DAY IS';
  randomSeason: Season = new Season('');

  ngOnInit(): void {
    this.getSeason();
  }

  constructor(
    private appService: AppService,
    private pouchDbService: PouchDbService) { }

  public getSeason() {
    return this.appService.getSeason()
      .subscribe(
        response => this.randomSeason = response
      );
  }
}
