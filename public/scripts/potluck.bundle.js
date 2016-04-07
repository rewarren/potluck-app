webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

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


	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('potluckApp')

	.directive('navigation', function(){
	  return {
	    templateUrl: "templates/navigation.html",
	    replace: true
	  }
	})


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

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


/***/ }
]);