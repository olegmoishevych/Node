const test = require('node:test');
const assert = require('assert');
const add = require('./script');

test('add 2 figures', async (t) => {
  await t.test('to be 5', () => {
    assert.strictEqual(add(2, 3), 5);
  });
});
