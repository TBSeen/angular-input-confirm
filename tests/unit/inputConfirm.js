'use strict';

describe('sn.inputConfirm', function (){

  var $location, $rootScope;

  beforeEach(function(){
    module('sn.inputConfirm');
  });

  beforeEach(inject(function ( _$location_, _$rootScope_) {
    $location = _$location_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(inject(function ($httpBackend) {
    $httpBackend.whenGET(/.*/).respond(200);
  }));

  it('should...', function() {
    expect(true).toBe(true);
  });

});
