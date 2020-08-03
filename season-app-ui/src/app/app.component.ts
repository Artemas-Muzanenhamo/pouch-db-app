import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'season generator';

  ngOnInit(): void {
    this.getSeason();
  }

  constructor(private appService: AppService) { }

  public getSeason() {
    return this.appService.getSeason()
      .subscribe(
        response => console.log(response)
      );
  }
}
