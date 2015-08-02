expjs
========

Simple utility to expand string token with given rules

## Install


`npm install expjs`


## Usage

```javascript

// the global mapping rule file
var Expander = require('expjs');

var mappingRule = {
    'btn': 'fg-color-dark bg-color-light',
    'btn-reverse': 'fg-color-light bg-color-dark'
}
module.exports = new Expander(mappingRule);


// a component file:
var cm = require('../css-class-mapping-rule');

var Btn = React.createClass({
  render: function () {
    return (
       <button className={cm('btn-reverse')}>My button</button>
    );
  }
});
```

The above reactjs code will yield component looks like

```html
<button class='fg-color-light bg-color-dark'>My buttn</button>
```
