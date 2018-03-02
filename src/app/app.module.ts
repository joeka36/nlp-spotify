import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RecordingComponent } from './recording/recording.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RecordingComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
