# regular

A collection of Javascript regular expressions. One npm module to easily install and have access to the most commonly used regeular expressions.

## Install

```
npm install regular --save
```

## Usage

This module is simply a collection of regular expression. Use them as you would any other expression.

```javascript
var regular = require('regular');

console.log(regular.email.test('someemail@gmail.com')) // outputs true
```

#### Include Expressions

* ` email ` - /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

## Test

```
npm test
```
