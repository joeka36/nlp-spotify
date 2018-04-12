import { Injectable } from '@angular/core';
import { Observable } from'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecordingService {
  commandList:string[] = [];

  constructor(private http:HttpClient) { }

  getCommandList() {
    return this.commandList;
  }

  submitCommand(command:string) {
    //Add command into commandList
    if(this.commandList.length == 5){
      this.commandList.pop();
      this.commandList.unshift(command)
    }

    else
      this.commandList.unshift(command)

    //Send command to back-end
    // return this.http.post("/api/new/command", command)
      // .subscribe();
  }

}
