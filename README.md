expjs
========

Simple utility to expand string token with given rules

## Install


`npm install expjs`


## Usage

```javascript
var ExpJs = require('expjs');
var rule = {
    'btn': 'fg-color-dark bg-color-light',
    'btn-reverse': 'fg-color-light bg-color-dark' 
}
var exp = ExpJs.init(rule);

var Btn = React.createClass({
  render: function () {
    return (
       <button className={exp('btn-reverse')}>My button</button>
    );
  }
});
```

The above reactjs code will yield component looks like 

```html
<button class='fg-color-light bg-color-dark'>My buttn</button>
```

