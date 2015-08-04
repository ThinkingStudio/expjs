var assert = require('assert');
var should = require('should');
var Expander = require('../expjs.src');


describe('expjs', function() {

  describe('expand', function() {
    var exp = new Expander({
      'btn': 'fg-dark-color,bg-light-color',
      'btn-reverse': 'fg-light-color,bg-dark-color'
    });
    it('should expand keys defined in rules', function() {
      assert.equal('fg-dark-color bg-light-color btn-default', exp('btn btn-default'));
    });
    it('should allow passing arguments in array', function() {
      assert.equal('fg-dark-color bg-light-color btn-default', exp(['btn', 'btn-default']));
    });
    it('should allow passing arguments in array in arguments', function() {
      assert.equal('fg-dark-color bg-light-color btn-default', exp('btn', 'btn-default'));
    });
  });

  describe('expand recursively', function() {
    var exp = new Expander({
      'btn-primary': 'color-1 color-6-bg',
      'btn-default': 'font-size-6',
      'btn-large': 'font-size-3',
      'btn-primary-default': 'btn-default btn-primary'
    });
    it('should expand keys defined in rules recursively', function() {
      assert.equal('font-size-6 color-1 color-6-bg', exp('btn-primary-default'));
    });
  });

})
