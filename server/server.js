// node dependencies
var path = require('path');
var express = require('express');

// server config
const PORT = process.env.PORT || 3000;
const serverDir = path.resolve('./dist');


// server setup
var server = express();

// all static assets found here
server.use(express.static(path.resolve('./dist')));

// all other routes sent to index.html
server.get('*', function(req, res) {
  res.sendFile(path.resolve('./dist/index.html'));

});


// start server
server.listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
  console.log('http://localhost:' + PORT);

});
