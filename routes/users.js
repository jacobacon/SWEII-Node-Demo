/**
 * File: users.js
 * Author: Jacob Beneski
 * Last Edit Date: 9-18-19
 * Description: User router for access to /users and /users/add
 */

//Import and initialize Express
var express = require('express');
var router = express.Router();

//Import and initialize Mongoose and User Schema
let mongoose = require('mongoose');
require('../schemas/user');
let User = mongoose.model('User');

//Import faker to be able to generate fake users.
let faker = require('faker');

/* GET users listing on /users/ */
router.get('/', function(req, res, next) {
  //Search for all users, and return a callback.
  User.find({}, (err, users) =>{
    //If there is an error, return the error to response. Otherwise return the list of all users in JSON format.
    err ? res.json(err) : res.json(users);
  });
});

/* Handle generating new Users, this *SHOULD* be a POST, but GET works for demo purposes.  use: router.post(...)*/
router.get('/add', function(req, res){
  //Add user to MongoDB

  // Create a new user object with random data from faker.
  let newUser = new User({
    customerName: faker.name.findName(),
    contactPhone: faker.phone.phoneNumber(),
    contactEmail: faker.internet.email()
  });

  //Save the user.
  newUser.save((err, data)=>{
    err ? res.json(err) : res.json(data);
  });
})

module.exports = router;
