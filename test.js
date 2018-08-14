const {parse, stringify} = require('./index');

// Build a string of tabular data.
const string = stringify([
  ['a', 'b', 'c'],    // column names
  {a: 1, b: 2, c: 3}, // first row
  [4, 5, 6],          // second row
]);

const assert = require('assert');

assert.equal(string, 'a\tb\tc\n1\t2\t3\n4\t5\t6');

console.log(string);

// Parse a string of tabular data.
const data = parse(string);

assert.equal(data.length, 2);

assert.deepEqual(data[0], {
  a: 1, b: 2, c: 3
});

assert.deepEqual(data[1], {
  a: 4, b: 5, c: 6
});

console.log(data);
