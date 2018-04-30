var nlp = require("compromise");

//Semantics Rule
//1) Ignore everything leading up to the first verb

//Standalone commands (play/stop/pause/next/previous)
//2) Verbs such as play, stop, pause, next, previous are all standalone verbs
//   and do not need any other words to determine its functionality

//Complex commands (build/create)
//3) Naive Approach: For verb such as make/build/create find all the words
//   after the key term (call/name)
//EX: build a playlist call summer
//EX: create a playlist name spring jam

//Complex commands (remove/delete) 
//4) Naive Approach: 


function getCommandArtist(command) {
  properNounList = command.topics().data();

  //Artist name is not a proper noun such as band names
  if(properNounList.length == 0){
    let matches = command.match('john * eats').out('text')
  }

  else
    return command.topics().data[0]["normal"];
}



function getCommandVerb(command) {
  return command.verbs(0).out("text");
}

function determineCommand(verb) {

  switch(verb) {
    case "play":
      //resume playback on user device
    
    case "resume":
      //resume playback on user device
    
    case "pause":
      //stop playback on user device
    
    case "stop":
      //stop playback on user device
    
    case "next":
      //skip to next song on playback
    
    case "back":
      //skip to previous song on playback
    
    case "previous":
      //skip to previous song on playback
    
    case "build":
      //create a new playlist
    
    case "create":
      //create a new playlist

    case "make":
      //create a new playlist
    
    case "remove"


  }
}

function parseCommand(command) {
  //This verb will be use to determine the overall command
  let verbCommand = getCommandVerb(command);
  verbCommand = verbCommand.toLowerCase();

}