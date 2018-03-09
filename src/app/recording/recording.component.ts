import { Component, OnInit } from '@angular/core';
import { SpeechRecognitionService } from '../speech-recognition.service';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.css']
})
export class RecordingComponent implements OnInit {
  isClicked:boolean = false;

  constructor(speechRecognitionService:SpeechRecognitionService) { }

  ngOnInit() {
  }

}
