var assert = require('assert');
var should = require('should');
var Exp = require('../expjs.src');


describe('expjs', function() {

  var exp;

  beforeEach(function() {
    exp = Exp.init({
      'btn': 'fg-dark-color,bg-light-color',
      'btn-reverse': 'fg-light-color,bg-dark-color'
    });
  });

  describe('expand', function() {
    it('should expand keys defined in rules', function() {
      assert.equal('fg-dark-color bg-light-color btn-default', exp('btn btn-default'));
    });
  });

})
