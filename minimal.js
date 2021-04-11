var http = require("http");
var url = require("url");
var express = require('express');

var app = express();





app.use(express.static('./'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



var server = require('http').createServer(app).listen(8888);



