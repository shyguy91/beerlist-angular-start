var app = angular.module('beerList', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/templates/home.html',
            controller: 'mainCtrl'
        })
        .state('beer', {
            url: '/beer/:id',
            templateUrl: '/templates/beer.html',
            controller: 'beerCtrl',
            params: {
                beerParam: null
            }
        });

    $urlRouterProvider.otherwise('/home');
}]);