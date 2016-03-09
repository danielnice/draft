angular.module('template').directive('menu', [

  function ($scope, $ionicModal, $timeout) {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      tabs: '='
    },
    templateUrl: 'www/modules/template/components/menu/menu.html',
    link: function ($scope, element, attrs) {



    }
  };
}]);