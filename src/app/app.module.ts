import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RecordingComponent } from './recording/recording.component';
import { HistoryComponent } from './history/history.component';
import { SpeechRecognitionService } from './speech-recognition.service';
import { RecordingService } from './recording/recording.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RecordingComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    HttpClientModule,
  ],
  providers: [
    SpeechRecognitionService,
    RecordingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
