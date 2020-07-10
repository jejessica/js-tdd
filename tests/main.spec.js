const { expect } = require('chai');

var exprct = require('chai').expect;

describe('Main', () => {
    var arr;
   
    beforeEach( () => {
        arr = [1, 2, 3];
    });

    it('should be an array', () => {
        expect(arr).to.be.a('array');
    });

    it('should have a size of 4 when push another value to the array', () => {
        arr.push(4);
        expect(arr).to.have.lengthOf(4);
    });

    it('should return true when pop 3 from the array', () => {
        expect(arr.pop() === 3).to.be.true;
    });

    it('should have a size of 2 when pop a value from the array', () => {
        arr.pop();
        expect(arr).to.have.include(2);
    });    
    
});