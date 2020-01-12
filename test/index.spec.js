const assert = require('assert');
const {expect} = require('chai');
const {sum, mult, isAdult,  isEvenNumber,isOddNumbers, power, concat, no, reverse} = require('../index.js');

describe('function sum', () => {
  it('sum 2 and 3 should equal 5', () => {
    assert.equal(sum(2, 3), 5);
  });

  it('sum 2 and 4 should equal 6', () => {
    expect(sum(2, 4)).to.eq(6);
  });

  it('sum 2 and 3 should not equal 5', () => {
    assert.notEqual(sum(2, 3), 0);
  });
});

describe ('function mult', () => {
  it('should function mult equals 10', () => {
    assert.equal(mult(2, 7), 14);
  });
});

describe('function isAdult', () => {
  it('should function isAdult should be true',() => {
    assert.equal(isAdult(21), true);
  });
});

describe ('finction isEvenNumber', () => {
  it('should function isEvenNumber check if 6 is Even', () => {
    assert.equal(isEvenNumber(6), true);
  });
  it('should function isEvenNumber check if 7 is not Even', () => {
    assert.equal(isEvenNumber(7), false);
  });
});

describe('function isOddNumbers',  () => {
  it ('should function even or Odd Numbers', () =>{
    assert.equal(isOddNumbers(7),true);
  });
});