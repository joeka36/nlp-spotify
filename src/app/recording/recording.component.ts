import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpeechRecognitionService } from '../speech-recognition.service';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.css']
})
export class RecordingComponent implements OnInit {
  isClicked:boolean = false;
  recordedSpeech:string = "Say something";

  constructor(private speechRecognitionService:SpeechRecognitionService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.speechRecognitionService.DestroySpeechObject();
  }

  activateSpeech():void {
    if(this.isClicked == false) {
      this.speechRecognitionService.record()
      .subscribe(
              //listener
              (value) => {
                  this.recordedSpeech = value;
                  console.log(value);
              },
              //errror
              (err) => {
                  console.log(err);
                  if (err.error == "no-speech") {
                      console.log("--restarting service--");
                      this.activateSpeech();
                  }
              },
      );
    }

    else{
      console.log("Completed")
      this.speechRecognitionService.DestroySpeechObject();
    }
  }

}
