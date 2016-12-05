'use strict';

(function (){
	var app = angular.module('pinterest');
	app.controller('landingCtrl', landingCtrlFunc);

	landingCtrlFunc.$inject = ['$scope', '$http', '$filter', '$location', '$mdToast'];

	function landingCtrlFunc($scope, $http, $filter, $location, $mdToast){
		$scope.new	= {
			'username':'',
			'email':'',
			'password':''
		};
		$scope.user = {
			'username':'',
			'password':''
		};

		$scope.register = function(){
			if ($scope.new.username == "" && $scope.new.password == "") {
				$mdToast.show(
					$mdToast.simple()
						.textContent('Password and Username Field required!')
						.hideDelay(1750)
				);
				return;
			}
			if ($scope.new.username == "") {
				$mdToast.show(
					$mdToast.simple()
						.textContent('Username Field required!')
						.hideDelay(1750)
				);
				return;
			}
			if ($scope.new.password == "") {
				$mdToast.show(
					$mdToast.simple()
						.textContent('Password Field required!')
						.hideDelay(1750)
				);
				return;
			}

		}

		$scope.login = function(){
			console.log($scope.user);
		}

	};
})();