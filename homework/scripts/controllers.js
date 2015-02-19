angular.module('app.controllers', [])
.controller('SignUpCtrl', function($scope, $location){

	$scope.submit = function() {
		if($scope.userForm.$valid) {
			console.log('valid sumbission');
			$scope.submissionSuccess = true;
		}
	};
});
