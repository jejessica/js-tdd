var expect = require('chai').expect;
var calc = require('../src/main');
var should = require('chai').should();

describe('Calc', () => {
    
    //smoke tests
    describe('smoke tests', () => {
        it('should exist the calc lib', () => {
            expect(calc).to.exist;
        });

        it('should exist the method `sum`', () => {
            expect(calc.sum).to.exist;
            expect(calc.sum).to.be.a('function');
        });

        it('should exist the method `sub`', () => {
            expect(calc.sub).to.exist;
            expect(calc.sub).to.be.a('function');
        });

        it('should exist the method `mult`', () => {
            expect(calc.mult).to.exist;
            expect(calc.mult).to.be.a('function');
        });

        it('should exist the method `div`', () => {
            expect(calc.div).to.exist;
            expect(calc.div).to.be.a('function');
        });
    });

    describe('Sum', () => {
        it('should return 4 when `sum(2,2)`', () => {
           expect(calc.sum(2, 2)).to.be.equal(4);
        });
    });

    describe('Sub', () => {
        it('should return 4 when `sub(6,2)`', () => {
           expect(calc.sub(6, 2)).to.be.equal(4);
        });
    });

    describe('mult', () => {
        it('should return 4 when `mult(4,1)`', () => {
           expect(calc.mult(4, 1)).to.be.equal(4);
        });
    });

    describe('div', () => {
        it('should return 3 when `div(9,3)`', () => {
           expect(calc.div(9, 3)).to.be.equal(3);
        });

        it('should return `Não é possível divisão por zero!` when divide by 0', () => {
           expect(calc.div(4, 0).should.be.equal('Não é possível divisão por zero!'));
        });
    });

});