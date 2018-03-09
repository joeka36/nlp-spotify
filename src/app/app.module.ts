import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RecordingComponent } from './recording/recording.component';
import { HistoryComponent } from './history/history.component';
import { SpeechRecognitionService } from './speech-recognition.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RecordingComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule
  ],
  providers: [SpeechRecognitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
