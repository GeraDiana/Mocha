const assert= require('assert');
const {sum,mult} = require('../index.js');

describe('function sum',()=>{
    it('should  sum equal 10', ()=>{
        assert.equal(sum( 2,4) , 6);
    })
    it('should  sum equal 0',function () {
        assert.notEqual(sum(  2,  4), 0);
    })

})
it('should  sum equal 10', ()=>{
    assert.equal(sum( 2,4) , 6);
})
it('should  sum equal 0',function () {
    assert.notEqual(sum(  2,  4), 0);
})
it('should mult a equal 8',()=>{
    assert.equal(mult(2 ,4), 8);
// });
