angular.module('potluckApp')

.directive('navigation', function(){
  return {
    templateUrl: "templates/navigation.html",
    replace: true
  }
})
