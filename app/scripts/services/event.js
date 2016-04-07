'use strict';

var angular = require('angular');

angular.module('potluckApp')
.service('eventService', function($http){

  this.getEventDetails = function(callback){
    $http.get('/api/eventdetails')
    .then(callback)
  }

  this.getFoods = function(callback){
    $http.get('/api/foods')
    .then(callback)
  }

})
