angular.module('app.controllers', [])
.controller('SignUpCtrl', function($scope, $location){
$scope.submissionSuccess = false;


	$scope.submit = function() {

		if($scope.userForm.$valid) {

			$scope.submissionSuccess = true;
			console.log($scope.submissionSuccess);

		}
	};
});
