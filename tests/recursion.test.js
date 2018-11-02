const assert = require('assert');
const recursion = require('../recursion');

const tree = {
  value: 100,
  left: { value: 90, left: { value: 70 }, right: { value: 99 } },
  right: { value: 120, left: { value: 110 }, right: { value: 130 } },
};

describe('recursion.js', () => {
  it('return write answer', () => {
    assert.deepStrictEqual(recursion(tree), [[100], [90, 120], [70, 99, 110, 130]]);
  });
  it('no extra fields function instance', () => {
    assert.equal(Object.keys(recursion), 0);
  });
  it('return array', () => {
    assert.equal(Array.isArray(recursion(tree)), true);
  });
  it('not mutate args', () => {
    recursion(tree);
    assert.deepStrictEqual(tree, {
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } },
    });
  });
});
