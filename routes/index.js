/**
 * File: index.js
 * Author: Jacob Beneski
 * Last Edit Date: 9-18-19
 * Description: Main index router for to / in express.
 */

//Import and initialize Express
var express = require('express');
var router = express.Router();

/* GET home page 'index.html' */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
