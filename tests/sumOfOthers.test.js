const assert = require('assert');
const sumOfOther = require('../sumOfOther');

describe('sumOfOther.js', () => {
  it('return null if no object in arg', () => {
    assert.equal(sumOfOther(1), null);
  });
  it('return null if no array in arg', () => {
    assert.equal(sumOfOther({ a: 'a' }), null);
  });
  it('return array', () => {
    assert.equal(Array.isArray(sumOfOther([2, 3, 4, 1])), true);
  });
  it('not mutate args', () => {
    const args = [2, 3, 4, 1];
    sumOfOther(args);
    assert.deepStrictEqual(args, [2, 3, 4, 1]);
  });
  it('return right value', () => {
    assert.deepStrictEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });
});
