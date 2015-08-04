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
       <button className={cm('btn-reverse other-class')}>My button</button>
    );
  }
});
```

The above reactjs code will yield component looks like

```html
<button class='fg-color-light bg-color-dark other-class'>My buttn</button>
```

### Input variants (supported since v0.0.5)

In the above example, you pass the str list in a string separated by white space `cm('btn-reverse other-class')`, expjs also allows you to pass in array or javascript arguments:

```javascript
<button className={cm(['btn-reverse', otherClass])}>My button</button>
<button className={cm('btn-reverse', otherClass)}>My button</button>
```

This will be useful when you are using variables for class name as shown above.
