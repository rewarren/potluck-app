var potluckApp = angular.module('potluckApp', []);


potluckApp.controller('mainCtrl', ['$scope', '$filter', function($scope, $filter){

  $scope.addfood = '';

  $scope.lowercasefood = function(){
    return $filter('lowercase')($scope.addfood);
  };

  $scope.characters = 3;

  $scope.foods = [
    { foodname: 'Turkey',
      chef: 'Charles',
      course: 'dinner'
    },
    { foodname: 'Green Beans',
      chef: 'Cheryl',
      course: 'dinner'
    },
    { foodname: 'Sweet Potatos',
      chef: 'Emily',
      course: 'dinner'
    },
    { foodname: 'Pumpkin Pie',
      chef: 'Pat',
      course: 'desserts'
    },
    { foodname: 'Mystery Drink',
      chef: 'Les',
      course: 'libations'
    },
    { foodname: 'Beer',
      chef: 'Brandon',
      course: 'libations'
    },
    { foodname: 'Cole Slaw',
      chef: 'Marilyn',
      course: 'dinner'
    },
    { foodname: 'Rainbow Carrots',
      chef: 'Lacey',
      course: 'dinner'
    },
    { foodname: 'Hummus',
      chef: 'Cheryl',
      course: 'appetizers'
    },
    { foodname: 'Raw veggies',
      chef: 'Cheryl',
      course: 'Appetizers'
    }
  ];

}]);
