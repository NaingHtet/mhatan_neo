
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var app = express();

require('./config')(app, express);
require('./server/router')(app);

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
