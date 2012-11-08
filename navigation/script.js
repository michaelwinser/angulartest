angular.module('navtest', ['ngSanitize'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider.
			when("/welcome", {templateUrl: 'welcome.html', controller:WelcomeController}).
			when("/settings", {templateUrl: 'settings.html', controller:SettingsController});

		$locationProvider.htmlMode(true)
	});

AppController.$inject = ['$scope', '$route']

function AppController($scope, $route, $locationProvider){
	$scope.$route = $route;

	$scope.person = {
		name: 'Michael Winser',
		contacts: [
		{type:'email', url:'michaelw@winser.com'},
		{type:'email', url:'michaelw@9summer.com'},
		{type:'phone', url:'2035294001'}
		]
	}

}

function WelcomeController($scope) {
	$scope.greet = function() {
		alert("hello " + $scope.person.name);
	}
}

function SettingsController($scope, $location) {
	$scope.cancel  = function() {
		$scope.form = angular.copy($scope.person);
	}

	$scope.save = function(){
		angular.copy($scope.form, $scope,person);
		$location.path('/welcome');
	}

	$scope.cancel();
}