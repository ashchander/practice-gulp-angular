var express = require('express');
var redis = require("redis");

var app = express();

app.use(express.static('public'));

app.get('/api', function(req, res) {
  //var client = redis.createClient();
  // TODO get list from redis
  //client.end();
  res.json(['Existing person 1', 'Existing Person 2']);
});

app.post('/api', function(req, res){
  //var client = redis.createClient();
  // TODO push name to list in redis
//  client.end();
  res.end({status: 201});
});

app.listen(3000);
