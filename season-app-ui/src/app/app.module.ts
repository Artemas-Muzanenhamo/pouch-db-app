import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppService} from "./app.service";
import {HttpClientModule} from "@angular/common/http";
import {PouchDbService} from "./pouch-db.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AppService,
    PouchDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
