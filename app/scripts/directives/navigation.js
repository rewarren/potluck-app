'use strict';

var angular = require('angular');

angular.module('potluckApp')

.directive('navigation', function(){
  return {
    templateUrl: "templates/navigation.html",
    replace: true
  }
})
