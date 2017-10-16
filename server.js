var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Beer = require("./beerModel");

mongoose.connect('mongodb://localhost/beers');

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/beers', function(request, response) {
  Beer.find({}, function(err, res) {
    if (err) {
      return next(err);
    } else {
      return response.send(res);
    }
  });
});

app.post('/beers', function (request, response, next) {
  Beer.create(request.body, function(err, res) {
    if (err) {
      return next(err);
    } else {
      return response.send(res);
    }
  });
});

app.delete('/beers/:id', function(request, response, next) {
  console.log(request.params.id);
  Beer.findByIdAndRemove(request.params.id, function(err, res){
    if (err) {
      return next(err);
    } else {
      return response.send(res);
    }
  });
});

// error handler to catch 404 and forward to main error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// main error handler
// warning - not for use in production code!
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

app.listen(8000, function() {
  console.log("yo yo yo, on 8000!!");
});
