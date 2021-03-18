import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {Season} from './season';
import {PouchDbService} from './pouch-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RANDOM SEASON OF THE DAY IS';
  randomSeason: Season = new Season('');
  private documentKey = 'SEASON';

  ngOnInit(): void {
    this.getSeason();
  }

  constructor(
    private appService: AppService,
    private pouchDbService: PouchDbService) { }

  private getSeason() {
    return this.appService.getSeason()
      .subscribe(
        response => {
          this.randomSeason = response;
          this.pouchDbService.syncWithPouchDB(response);
        },
        error => {
          console.error('Something went wrong: ', error.message);
          return this.getValueFromPouchDB();
        }
      );
  }

  private getValueFromPouchDB(): Promise<void | Season> {
    return this.pouchDbService.retrieveFromDB(this.documentKey)
      .then(season => this.randomSeason = season)
      .catch(() => console.error('THERE IS NO DOCUMENT WITH THAT DOCUMENT KEY: ', this.documentKey));
  }
}
