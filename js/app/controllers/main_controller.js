function MainController($scope) {
  $scope.name = "Tucker";
  $scope.contact = {
    phone:  "555-123-4567",
    email: "angular@test.com"
  };
}


angular
  .module('app')
  .controller('MainController', MainController);