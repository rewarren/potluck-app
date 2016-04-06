var potluckApp = angular.module('potluckApp', ['ngRoute']);

potluckApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'templates/home.html',
    controller: 'mainCtrl'
  })
  .when('/event', {
    templateUrl: 'templates/event.html',
    controller: 'mainCtrl'
  })
}]);

potluckApp.controller('mainCtrl', ['$scope', 'eventService', '$http', function($scope, eventService, $http){

  eventService.getEventDetails(function(response){
    $scope.eventDetails = response.data
  })

  eventService.getFoods(function(response){
    $scope.foods = response.data
  })

  eventService.getCourses(function(response){
    $scope.courses = response.data
  })

  $scope.addFoods = function(){
    var food = [{foodname: "", chef: "", course: ""}]
    console.log(food)
    $scope.foods.push(food)
  }

}]);

potluckApp.service('eventService', function($http){
  this.getEventDetails = function(callback){
    $http.get('mock/eventdetails.json')
    .then(callback)
  }

  this.getFoods = function(callback){
    $http.get('mock/foods.json')
    .then(callback)
  }

  this.getCourses = function(callback){
    $http.get('mock/courses.json')
    .then(callback)
  }
})
