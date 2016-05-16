'use strict';

describe('Controller: CharactersCtrl', function () {

  // load the controller's module
  beforeEach(module('sfvAngularApp'));

  var CharactersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharactersCtrl = $controller('CharactersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CharactersCtrl.awesomeThings.length).toBe(3);
  });
});
