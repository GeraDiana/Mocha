const assert = require('assert');
const {expect} = require('chai');
const {sum,isAdult, mult, power, concat, no, reverse} = require('../index.js');

describe('function sum', () => {
  it('sum 2 and 3 should equal 5', () => {
    assert.equal(sum(2, 3), 5);
  });
  expect(sum (2, 4)).to.eq(6);

  it('sum 2 and 3 should not equal 5', () => {
    assert.notEqual(sum(2, 3), 0);
  });
});

describe('function isAdult', () => {
  it('function isAdult should be true',() => {
    assert.equal(isAdult(21), true);
  });
});