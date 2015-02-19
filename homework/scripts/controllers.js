angular.module('app.controllers', [])
.controller('SignUpCtrl', function($scope, $location){
$scope.submissionSuccess = false;
$scope.submissionMessage = false;
	$scope.submit = function() {
		if($scope.userForm.$valid) {
			console.log('valid sumbission');
			$scope.submissionSuccess = true;
			$scope.submissionMessage = true;
		}
	};
});
