angular.module('app.controllers', [])
.controller('SignUpCtrl', function($scope, $location){

	$scope.submit = function() {
		if($scope.userForm.$valid) {
			// $window.location = "http://theironyard.com";
			console.log('form is valid');
		}
		console.log($scope.userForm);
	};
});
