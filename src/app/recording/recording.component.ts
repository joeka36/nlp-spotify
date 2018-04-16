import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpeechRecognitionService } from '../speech-recognition.service';
import { RecordingService } from './recording.service';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.css']
})
export class RecordingComponent implements OnInit {
  isClicked:boolean = false;
  recordedSpeech:string = "Click the microphone to start recording. Once you're done, click it again and submit using the button to the right.";

  constructor(private speechRecognitionService:SpeechRecognitionService,
              private recordingService:RecordingService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.speechRecognitionService.DestroySpeechObject();
  }

  onSubmit() {
    console.log("Submitted");
    this.recordingService.addCommand(this.recordedSpeech);
    this.recordingService.submitCommand(this.recordedSpeech);
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
