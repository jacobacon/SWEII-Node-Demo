var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
require('../schemas/user');
let User = mongoose.model('Customer');

let faker = require('faker');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, (err, users) =>{
    err ? res.json(err) : res.json(users);
  });
});

router.get('/add', function(req, res){
  //Add user to MongoDB

  let newUser = new User({
    customerName: faker.name.findName(),
    contactPhone: faker.phone.phoneNumber(),
    contactEmail: faker.internet.email()
  });

  newUser.save((err, data)=>{
    err ? res.json(err) : res.json(data);
  });
})

module.exports = router;
