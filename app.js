/**
 * File: app.js
 * Author: Jacob Beneski
 * Last Edit Date: 9-18-19
 * Description: Main script for configuring and executing Express API
 */

// Import and configure dependencies
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Define routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//Define and initialize mongoose connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/test', {useNewUrlParser: true});

//Initialize Express app
var app = express();

//Define express settings, and mixins
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Register routers with Express
app.use('/', indexRouter);
app.use('/users', usersRouter);

//Export the app to parent module (www)
module.exports = app;
