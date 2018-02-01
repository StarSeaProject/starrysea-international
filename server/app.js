//Import Dep.
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Ddos = require('ddos');
//Import Routing
var index = require('./routes/index');
var users = require('./routes/users');
var activity = require('./routes/activity');
var works = require('./routes/works');
var funding = require('./routes/funding');
var version = require('./routes/version');
var ddos = new Ddos({burst:60, limit:1000});

var app = express();

//Init Express Server
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static',express.static(path.join(__dirname, 'public')));
app.use(ddos.express);
//Allow CROS
app.all('*', function(req, res, next) {
    console.log(req.get('host'));
    res.header("Access-Control-Allow-Origin", req.get('origin'));
    res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE,OPTIONS,PATCH");
    next();
});
//Init Express Routing
app.use('/', index);
app.use('/activity',activity);
app.use('/users', users);
app.use('/work',works);
app.use('/funding',funding);
app.use('/version',version);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  res.send(err);
});

module.exports = app;
