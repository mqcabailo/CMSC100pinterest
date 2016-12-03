'use strict';

(function (){
	var app = angular.module('pinterest');
	app.controller('profileCtrl', profileCtrlFunc);

	profileCtrlFunc.$inject = ['$scope', '$http', '$filter', '$location'];

	function profileCtrlFunc($scope, $http, $filter, $location){
		$scope.user = {
			'username':''
		}
		
		$http({
			method: 'GET',
			url: 'http://localhost:3000/profile/1'
		}).then(success, error);

		function success (response) {
			$scope.user.username = response.data[0].username;
			console.log(response.data[0]);
		};

		function error (response) {
			console.log(response);

		};


	};
})();