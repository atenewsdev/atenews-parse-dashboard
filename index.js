var express = require('express');
var ParseDashboard = require('parse-dashboard');

var dashboard = new ParseDashboard({
  apps: [
    {
      serverURL: "https://atenews-parse.herokuapp.com/parse",
      appId: "atenews",
      masterKey: "0oETbxjUirR2S2n5XF7gJ7CZ2AH1wKwt",
      appName: "Atenews"
    }
  ],
});

var app = express();

// make the Parse Dashboard available at /
app.use('/', dashboard);

var port = 4040;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log('parse-dashboard-example running on port ' + port + '.');
});