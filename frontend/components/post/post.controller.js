'use strict';

(function (){
	var app = angular.module('pinterest');
	app.controller('postCtrl', postCtrlFunc);

	homeCtrlFunc.$inject = ['$scope', '$http', '$filter', '$location', 'authService'];

	function postCtrlFunc($scope, $http, $filter, $location, authService){
		authService.auth();

	};
})();