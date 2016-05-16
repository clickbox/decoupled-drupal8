'use strict';

/**
 * @ngdoc function
 * @name sfvAngularApp.controller:CharactersCtrl
 * @description
 * # CharactersCtrl
 * Controller of the sfvAngularApp
 */
angular.module('sfvAngularApp')
.controller("CharactersCtrl", function($scope, $http) {
$http.get('http://theauthenticstruggle.com/api/characters').
  success(function(data, status, headers, config) {
    $scope.characters = data;
  }).
  error(function(data, status, headers, config) {
    // log error
  });
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});
