angular.module('template', [

]).controller('templateCtrl', function($scope, $ionicModal, $timeout, $ionicSideMenuDelegate) {

	$scope.menuItems = [
		{
			title: 'Settings'
		},
		{
			title: 'Sign Out'
		}
	];





	init();
	function init(){
		console.log('Template Init');
	}





});