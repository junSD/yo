'use strict';

describe('Service: NestoriaAPI', function () {

  // load the service's module
  beforeEach(module('yoApp'));

  // instantiate service
  var NestoriaAPI;
  beforeEach(inject(function (_NestoriaAPI_) {
    NestoriaAPI = _NestoriaAPI_;
  }));

  it('should do something', function () {
    expect(!!NestoriaAPI).toBe(true);
  });

});
