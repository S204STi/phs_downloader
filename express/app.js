'use strict';

var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieparser = require('cookie-parser'),
    bodyparser = require('body-parser');

// var routes = require('./routes/index');

var app = express();

//catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not found');
    err.status = 404;
    next(err);
});


// error handlers
// development error handler
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;