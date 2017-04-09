var express = require('express');
var compression = require('compression');
var cert = require('./cert.js');
var https = require('https');

var port = 8080;
var app = express();

app.use(compression());
app.use(express.static('files'));

console.log(cert);

var server = https.createServer(cert, app).listen(port, _ => console.log('listening on port ${port}'));
