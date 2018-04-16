var async = require("async");
var express = require('express');
var router = express.Router();

router.post("/new/command", (req, res) =>{
  console.log(req.body["cmd"]);
  res.send(req.body)
});

module.exports = router;