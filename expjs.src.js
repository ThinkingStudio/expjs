'use strict';

function Expander(rule) {

  function _expand(str, recursively) {
    var strArray = str.split(/[,;:\s]/);
    var ret = [];
    for (var i = 0, j = strArray.length; i < j; ++i) {
      var key = strArray[i];
      var expanded = _rule[key];
      if (expanded) {
        var expandedArray = expanded.split(/[,;:\s]/);
        if (recursively) {
          for (var x = 0, y = expandedArray.length; x < y; ++x) {
            ret = ret.concat(_expand(expandedArray[x], true));
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
    _rule[key] = _expand(val, true).join(' ');
  }

  return function(str) {
    return _expand(str).join(' ');
  };

}

module.exports = Expander;
