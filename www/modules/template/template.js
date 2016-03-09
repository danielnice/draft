angular.module('template', [

]).controller('templateCtrl', function($scope, $ionicModal, $timeout, $ionicSlideBoxDelegate, $ionicModal) {

	$scope.templateItems = [
		{
			title: 'Settings'
		},
		{
			title: 'Sign Out'
		}
	];

	$scope.sportFilters = [
		{
			title: 'NFL'
		},
		{
			title: 'NBA'
		},
		{
			title: 'MLB'
		},
		{
			title: 'NHL'
		},
		{
			title: 'NCAA Football'
		}
	];






  $ionicModal.fromTemplateUrl('/modules/template/components/menu/menu.html', {
    scope: $scope,
    animation: 'slide-in-down'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };


  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });

  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });








	init();
	function init(){

	}



});