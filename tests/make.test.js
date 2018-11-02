const assert = require('assert');
const make = require('../make');

function sum(a, b) {
  return a + b;
}
describe('make.js', () => {
  it('make returns function', () => {
    assert.equal(typeof make(), 'function');
  });
  it('no extra props in make function', () => {
    assert.deepStrictEqual(Object.keys(make), []);
  });
  it('return number', () => {
    assert.deepStrictEqual(typeof make(15)(34, 21, 666)(41)(sum), 'number');
  });
  it('make type coersion for args', () => {
    assert.deepStrictEqual(typeof make('15')(34, '21', 666)(41)(sum), 'number');
  });
  it('return right summ', () => {
    assert.deepStrictEqual(make(15)(34, 21, 666)(41)(sum), 777);
  });
});
