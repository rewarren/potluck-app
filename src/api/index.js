'use strict';

var express = require('express');
var foods = require('../../mock/foods.json');
var eventdetails = require('../../mock/eventdetails.json')

var router = express.Router();

router.get('/eventdetails', function(req,res){
  res.json({eventdetails: eventdetails});
})

router.get('/foods', function(req,res){
  res.json({foods: foods});
})

//TODO: Add POST route to create new entries
//TODO: Add PUT route to update existing entries
//TODO: Add DELETE route to delete entries

module.exports = router;
