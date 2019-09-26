var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;
app.listen(app.get ('port'), function () {
  console.log('Node server is running on port  '+ app.get ('port'));
});
