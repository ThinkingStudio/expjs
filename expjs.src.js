'use strict';

function Expander(rule) {

  function isArray(v) {
    return Object.prototype.toString.call(v) === '[object Array]';
  }

  function isStr(v) {
    return typeof v === 'string';
  }

  function isObject(v) {
    return typeof v === 'object';
  }

  function flat(v, set) {
    if (isArray(v)) {
      flatArray(v, set);
    } else if (isStr(v)) {
      flatStr(v, set);
    } else if (isObject(v)) {
      flatObj(v, set);
    } else {
      throw 'unknown argument type: ' + (typeof v);
    }
  }

  function flatStr(str, set) {
    var sa = str.split(/[,;:\s]/);
    if (sa.length == 1) {
      set[sa[0]] = null;
    } else if (sa.length > 1) {
      flatArray(sa, set);
    }
  }

  function flatArray(array, set) {
    for (var i = 0, j = array.length; i < j; ++i) {
      var item = array[i];
      flat(item, set);
    }
  }

  function flatObject(obj, set) {
    for (var p in obj) {
      if (object.hasOwnProperty(p)) {
        flat(p, set);
      }
    }
  }

  function transform(v) {
    var set = {};
    flat(v, set);
    return set;
  }

  function _expand(set, recursively) {
    var ret = [];
    for (var key in set) {
      if (!set.hasOwnProperty(key)) {
        continue;
      }
      var expanded = _rule[key];
      if (expanded) {
        var expandedArray = expanded.split(/[,;:\s]/);
        if (recursively) {
          for (var i = 0, j = expandedArray.length; i < j; ++i) {
            ret = ret.concat(_expand(transform(expandedArray[i]), true));
          }
        } else {
          ret = ret.concat(expandedArray);
        }
      } else {
        ret.push(key);
      }
    }
    return ret;
  }

  var _rule = rule;
  for (var key in _rule) {
    var val = _rule[key];
    _rule[key] = _expand(transform(val), true).join(' ');
  }

  return function() {
    var j = arguments.length;
    if (j == 0) {
      return '';
    }
    var set = {};
    for (var i = 0; i < j; ++i) {
      var v = arguments[i];
      flat(v, set);
    }
    return _expand(set).join(' ');
  };

}

module.exports = Expander;
