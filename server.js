var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/api', function(req, res) {
  res.json(['Existing person 1', 'Existing Person 2']);
});

app.listen(3000);
