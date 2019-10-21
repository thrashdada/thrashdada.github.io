var myApp = angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'myControllers'
]);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'js/partials/login.html',
            controller: 'LoginController'
        })
        .when('/summary', {
            templateUrl: 'js/partials/summary.html',
            controller: 'SummaryController'
        })


}]);
  