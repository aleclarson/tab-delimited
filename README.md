# tab-delimited v0.1.0

Parse or build a string of tabular data.

```js
const {parse, stringify} = require('tab-delimited');

// Build a string of tabular data.
const string = stringify([
  ['a', 'b', 'c'],    // column names
  {a: 1, b: 2, c: 3}, // first row
  [4, 5, 6],          // second row
]);

assert(string == 'a\tb\tc\n1\t2\t3\n4\t5\t6');

// Parse a string of tabular data.
const data = parse(string);

assert(data.length == 2);
assert(data[0].a == 1);
assert(data[1].a == 4);
```
