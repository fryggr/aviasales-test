
var express = require('express')
var port = 3001

var app = express()

app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:' + port)
})

const data = require('./tickets.json')

app.get('/search', function (req, res) {
  res.json(data);
  // res.header("Content-Type",'application/json');
  // res.send(JSON.stringify(data));
})
