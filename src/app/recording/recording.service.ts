import { Injectable } from '@angular/core';
import { Observable } from'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class RecordingService {
  commandList:string[] = [];

  constructor(private http:HttpClient) { }

  getCommandList() {
    return this.commandList;
  }

  addCommand(command:string) {
    //Add command into commandList
    if(this.commandList.length == 5){
      this.commandList.pop();
      this.commandList.unshift(command)
    }

    else
      this.commandList.unshift(command)
  }

  submitCommand(command:string) {
    console.log(command);
    //Send command to back-end
    return this.http.post("/api/new/command", {
      cmd: command
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

}
