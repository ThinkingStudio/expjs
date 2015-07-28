'use strict';

function _init(rule) {
  return function(str) {
var strArray = str.split(/[,;:\s]/);
var ret = [];
for (var i = 0, j = strArray.length; i < j; ++i) {
  var key = strArray[i];
  var expanded = rule[key];
  if (expanded) {
    ret = ret.concat(expanded.split(/[,;:\s]/));
  } else {
    ret.push(key);
  }
}
return ret.join(' ');
  };
}

var ExpandJs = {
  init: _init
};

module.exports = ExpandJs;
