'use strict';

(function (){
	var app = angular.module('pinterest');
	app.controller('profileCtrl', profileCtrlFunc);

	profileCtrlFunc.$inject = ['$scope', '$http', '$filter', '$location'];

	function profileCtrlFunc($scope, $http, $filter, $location){
		$scope.boards = {};
		$scope.user = {};
		$scope.fboards = {};
		$scope.fposts = {};

		$http({
			method: 'GET',
			url: 'http://localhost:3000/profile/2'
		}).then(success, error);

		function success (response) {
			$scope.user = response.data[0];
		};

		function error (response) {
			console.log(response);
		};

		$scope.getBoards = function(){
			$http({
				method: 'GET',
				url: 'http://localhost:3000/profile/2/getBoards'
			}).then(success, error);

			function success (response) {
				$scope.boards = response.data;
			};

			function error (response) {
				console.log(response);
			};
		}

		$scope.getFollowedBoards = function(){
			$http({
				method: 'GET',
				url: 'http://localhost:3000/profile/2/getFollowedBoards'
			}).then(success, error);

			function success (response) {
				$scope.fboards = response.data;
				console.log(response.data);
			};

			function error (response) {
				console.log(response);
			}
		}


		$scope.getFollowedPosts = function(){
			$http({
				method: 'GET',
				url: 'http://localhost:3000/profile/1/getFollowedPosts'
			}).then(success, error);

			function success (response) {
				$scope.fposts = response.data;
				console.log(response.data);
			};

			function error (response) {
				console.log(response);
			}
		}
	

	};
})();