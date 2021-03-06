//Import Dep.
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Ddos = require('ddos');
var favicon = require('serve-favicon');
//Import Routing
var index = require('./routes/index');
var users = require('./routes/users');
var activity = require('./routes/activity');
var works = require('./routes/works');
var funding = require('./routes/funding');
var version = require('./routes/version');
var qa = require('./routes/qa');
var config = require('./config');
//Init Ddos Protection
var ddos = new Ddos({burst:120, limit:800});

var app = express();

//Init Express Server
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(ddos.express);
//Allow CROS
app.all('*', function(req, res, next) {
    if(config.trustOrigin.includes(req.get('Origin'))) {
        res.header("Access-Control-Allow-Origin", req.get('origin'));
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS,PATCH");
        next();
    }else{
        next();
    }
});
//Init Express Routing
app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use('/static',express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/activity',activity);
app.use('/users', users);
app.use('/work',works);
app.use('/funding',funding);
app.use('/version',version);
app.use('/qa',qa);
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
  res.status(err.status || 500).send(err.toString())
});

module.exports = app;
