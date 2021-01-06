var express = require('express');
var ParseDashboard = require('parse-dashboard');
require('dotenv').config();

var dashboard = new ParseDashboard({
  apps: [
    {
      serverURL: "https://atenews-parse.herokuapp.com/parse",
      appId: "atenews",
      masterKey: process.env.MASTER_KEY,
      appName: "Atenews"
    }
  ],
  users: [
    {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD
    }
  ]
});

var app = express();

// make the Parse Dashboard available at /
app.use('/', dashboard);

var port = 4040;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log('parse-dashboard-example running on port ' + port + '.');
});