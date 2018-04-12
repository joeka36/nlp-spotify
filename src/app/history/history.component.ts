import { Component, OnInit, DoCheck } from '@angular/core';
import { RecordingService } from '../recording/recording.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  // historyCommands:string[] = ["Play all the stars by kendrick lamar",
  //                             "Make dance playlist",
  //                             "Add bailando by enrique iglesias to dance",
  //                             "Play him and i by g eazy",
  //                             "remove bailando from dance"];
  historyCommands:string[] = [];

  constructor(private recordingService:RecordingService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.historyCommands = this.recordingService.getCommandList();
  }

}
