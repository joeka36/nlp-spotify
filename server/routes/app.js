var async = require("async");
var express = require('express');
var router = express.Router();
var nlp = require("../nlp/nlp")

router.post("/new/command", (req, res) =>{
  console.log("Log: " + req.body["cmd"]);
  res.send(req.body);
  // console.log(nlp);
  nlp.parseCommand(req.body["cmd"]);
});

module.exports = router;