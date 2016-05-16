'use strict';

/**
 * @ngdoc overview
 * @name sfvAngularApp
 * @description
 * # sfvAngularApp
 *
 * Main module of the application.
 */
angular
  .module('sfvAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/characters', {
        templateUrl: 'views/characters.html',
        controller: 'CharactersCtrl',
        controllerAs: 'characters'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
