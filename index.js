var express = require('express');
var server = express();

server.get('/.well-known/apple-app-site-association', function(request, response) {
  response.sendFile(__dirname +  '/.well-known/apple-app-site-association');
});

server.get('/', function(request, response) {
  response.sendFile(__dirname +  '/index.html');
});

server.get('/items', function(request, response) {
  response.sendFile(__dirname +  '/items.html');
});

server.listen(80);