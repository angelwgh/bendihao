var admin = {};
    admin.mainApp = angular.module('adminApp', ['login']);

    admin.login = angular.module('login', []);
    
    admin.login.controller('loginCtr',['$scope','$window',function ($scope,$window) {
    	$scope.submit = function ($event) {
    		$event.preventDefault();
    		$window.location.href = 'admin.html'
    	}
    }])