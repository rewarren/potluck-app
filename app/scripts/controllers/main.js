angular.module('potluckApp')


.controller('mainCtrl', ['$scope', 'eventService', '$http', function($scope, eventService, $http){

  $scope.addFoods = function(){
    var foodname = $scope.foods.foodname;
    var chef = $scope.foods.chef;
    var course = $scope.foods.course;
    var food = {foodname, chef, course}
    $scope.foods.push(food)
  };

  eventService.getEventDetails(function(response){
    $scope.eventdetails = response.data.eventdetails
  })

  eventService.getFoods(function(response){
    $scope.foods = response.data.foods
  })

}]);
