'use strict';

var angular = require('angular');

var potluckApp = angular.module('potluckApp', ['ngRoute']);

potluckApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '../templates/home.html',
    controller: 'mainCtrl'
  })
  .when('/event', {
    templateUrl: '../templates/event.html',
    controller: 'mainCtrl'
  })
}]);


require('./scripts/controllers/main.js');
require('./scripts/directives/navigation.js');
require('./scripts/services/event.js');
