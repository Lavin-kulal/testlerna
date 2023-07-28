'use strict';

const myButton = require('..');
const assert = require('assert').strict;

assert.strictEqual(myButton(), 'Hello from myButton');
console.info('myButton tests passed');
