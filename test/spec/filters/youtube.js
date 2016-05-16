'use strict';

describe('Filter: youtube', function () {

  // load the filter's module
  beforeEach(module('sfvAngularApp'));

  // initialize a new instance of the filter before each test
  var youtube;
  beforeEach(inject(function ($filter) {
    youtube = $filter('youtube');
  }));

  it('should return the input prefixed with "youtube filter:"', function () {
    var text = 'angularjs';
    expect(youtube(text)).toBe('youtube filter: ' + text);
  });

});
