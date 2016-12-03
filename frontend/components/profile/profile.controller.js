'use strict';

(function (){
	var app = angular.module('pinterest');
	app.controller('profileCtrl', profileCtrlFunc);

	profileCtrlFunc.$inject = ['$scope', '$http', '$filter', '$location'];

	function profileCtrlFunc($scope, $http, $filter, $location){
		$scope.user = {
			"firstname"		:"matthew",
			"lastname"		:"cabailo"
		};


	};
})();