const chai = require('chai');
const expect = chai.expect;
const index = require('./index.js');

describe("validator.isNumValid()", () =>{
    it('should return true for a number between 10 and 70', () =>{

        expect(validator.isNumValid(40)).to.be.true
    })

    it('should return false for number greater than 70', () =>{
        expect(validator.isNumValid(90)).to.be.false
    })
    it('should return false for number less than 10', () =>{
        expect(validator.isNumValid(6)).to.be.false
    })
})