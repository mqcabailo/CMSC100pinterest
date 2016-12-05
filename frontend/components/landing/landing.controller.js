'use strict';

(function (){
	var app = angular.module('pinterest');
	app.controller('landingCtrl', landingCtrlFunc);

	landingCtrlFunc.$inject = ['$scope', '$http', '$filter', '$location', '$mdToast', 'authService'];

	function landingCtrlFunc($scope, $http, $filter, $location, $mdToast, authService){
		authService.auth();

		$scope.new	= {
			'username':'',
			'email':'',
			'password':''
		};
		$scope.user = {
			'email':'',
			'password':''
		};

		$scope.register = function(){
			if ($scope.new.username == "" || $scope.new.password == "" || $scope.new.email == "" ) {
				$mdToast.show(
					$mdToast.simple()
						.textContent('Please Fill out all fields')
						.hideDelay(1750)
				);
				return;
			}

			$http({
				method: 'POST',
				url: 'http://localhost:3000/register',
				data: $scope.new,
				withCredentials:true
			}).then(success, error);

			function success(response){
				$mdToast.show(
					$mdToast.simple()
						.textContent('Account Creation Successful')
						.hideDelay(1750)
				);
			};

			function error(response){
				
			}
		}

		$scope.login = function(){
			if ($scope.user.username == "" || $scope.user.email == "") {
				$mdToast.show(
					$mdToast.simple()
						.textContent('Please Fill out all fields')
						.hideDelay(1750)
				);
				return;
			}

			$http({
				method: 'POST',
				url: 'http://localhost:3000/login',
				data: $scope.user,
				withCredentials:true
			}).then(success, error);

			function success(response){
				console.log(response.data[0]);
				authService.setSession(response.data[0]);
				$mdToast.show(
					$mdToast.simple()
						.textContent('Login Successful')
						.hideDelay(1750)
				);
				$location.path('/home');
			};

			function error(response){
				$mdToast.show(
					$mdToast.simple()
						.textContent('Wrong Username or Password')
						.hideDelay(1750)
				);
				return;
			}
		}

	};
})();