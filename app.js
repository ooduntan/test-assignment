require('dotenv').config({ silent: true });
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api', index);

require('./models/seed/category')

// catch 404 and forward to error handler
app.use('/*', function (req, res) {
  res.status(404);
  res.send({message: 'Not Found'});
});


module.exports = app;
