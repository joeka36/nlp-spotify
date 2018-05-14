var nlp = require("compromise");
var spotify = require("../spotify/spotify.js");

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

function nlpModule() {

}

nlpModule = {
  getCommandArtist: function(command) {
    properNounList = command.topics().data();

    //Artist name is not a proper noun such as band names
    if(properNounList.length == 0){
      let matches = command.match('john * eats').out('text')
    }

    else
      return command.topics().data[0]["normal"];
  },

  getCommandVerb: function (command) {
    return command.verbs(0).out("text");
  },

  determineCommand: function(verb, command) {
  //According to the first verb we will need to continue parsing the command accordingly
  //and call the accurate api call using the spotify-node-api wrapper

    switch(verb) {
      case "play":
        //resume playback on user device
        console.log("play detected");
        console.log("Spotify Authorization: " + spotify.authorizationCode)
        spotify
          .authorizationCodeGrant(spotify.authorizationCode)
          .then(function(data) {
            console.log('Retrieved access token', data.body['access_token']);

            // Set the access token
            spotify.setAccessToken(data.body['access_token']);
            return spotify.getMyDevices();
          })
          .then(function(data){
            console.log(data.body)
          })
          .catch(function(err){
            console.log("An error occurred: " + err)
          });
      
      case "resume":
        //resume playback on user device
      
      case "pause":
        //stop playback on user device
      
      case "stop":
        //stop playback on user device
      
      case "next":
        //skip to next song on playback
      
      case "skip":
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
      
      case "remove":
      //


    }
  },

  parseCommand: function(command) {
    //This verb will be use to determine the overall command
    let verbCommand = this.getCommandVerb(nlp(command));
    verbCommand = verbCommand.toLowerCase();
    this.determineCommand(verbCommand, command)
  }

}

module.exports = nlpModule;