const assert = require('node:assert/strict');
// let res = assert.strictEqual(1 + 1, 2, '1 + 1 should equal 2');
// console.log(res)
// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected ... Lines skipped
//
//   [
//     [
// ...
//       2,
// +     3
// -     '3'
//     ],
// ...
//     5
//   ]

try {
    assert.strictEqual(1 + 1, 2, '1 + 1 should equal 2');
    console.log('Assertion passed: 1 + 1 equals 2');
} catch (error) {
    console.error('Assertion failed:', error.message);
}
