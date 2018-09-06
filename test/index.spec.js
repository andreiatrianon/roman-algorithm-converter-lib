const { romanToInt, intToRoman }  = require('../index');
const chai = require('chai');
const expect = chai.expect;

describe("romanToInt - convert roman to arabic algorithm:", function() {
  describe("> Should throw an Error:", function() {
    describe("when parameter is empty", function() {
      it("should throw a Error message: 'The parameter is empty, insert a roman algorithm'", () => {
        expect(() => romanToInt('')).to.throw(Error, 'The parameter is empty, insert a roman algorithm');
      });
    });
    describe("when parameter contains arabics algorithms", function() {
      it("should throw a Error message: 'The parameter contains arabics algorithms, insert only romans algorithms'", () => {
        expect(() => romanToInt(2)).to.throw(Error, 'The parameter contains arabics algorithms, insert only romans algorithms');
        expect(() => romanToInt('C2X')).to.throw(Error, 'The parameter contains arabics algorithms, insert only romans algorithms');
        expect(() => romanToInt('abc')).to.throw(Error, 'The parameter contains arabics algorithms, insert only romans algorithms');
        expect(() => romanToInt('XABII')).to.throw(Error, 'The parameter contains arabics algorithms, insert only romans algorithms');
      });
    });
  });
  describe("> Should return a arabic algorithm:", function() {
    describe("when parameter is 'X'", function() {
      it("should return 10", () => {
        expect(romanToInt('X')).to.deep.equal(10);
      });
    });
    describe("when parameter is 'IX'", function() {
      it("should return 9", () => {
        expect(romanToInt('IX')).to.deep.equal(9);
      });
    });
    describe("when parameter is 'XXII'", function() {
      it("should return 22", () => {
        expect(romanToInt('XXII')).to.deep.equal(22);
      });
    });
    describe("when parameter is 'MMMCMXCIX'", function() {
      it("should return 3999", () => {
        expect(romanToInt('MMMCMXCIX')).to.deep.equal(3999);
      });
    });
  });
});

describe("intToRoman - convert arabic to roman algorithm:", function() {
  describe("> Should throw an Error:", function() {
    describe("when parameter is empty", function() {
      it("should throw a Error message: 'The parameter is empty, insert a arabic algorithm'", () => {
        expect(() => intToRoman('')).to.throw(Error, 'The parameter is empty, insert a arabic algorithm');
      });
    });
    describe("when parameter contains a text", function() {
      it("should throw a Error message: 'The parameter contais a text, insert a arabic algorithm without text'", () => {
        expect(() => intToRoman('0ABC00')).to.throw(Error, 'The parameter contais a text, insert a arabic algorithm without text');
        expect(() => intToRoman('abc')).to.throw(Error, 'The parameter contais a text, insert a arabic algorithm without text');
      });
    });
    describe("when parameter is zero", function() {
      it("should throw a Error message: 'The parameter is zero, insert a arabic algorithm between 1 and 3999'", () => {
        expect(() => intToRoman(0)).to.throw(Error, 'The parameter is zero, insert a arabic algorithm between 1 and 3999');
      });
    });
    describe("when parameter is less than zero", function() {
      it("should throw a Error message: 'The parameter is less than zero, insert a arabic algorithm between 1 and 3999'", () => {
        expect(() => intToRoman('-1')).to.throw(Error, 'The parameter is less than zero, insert a arabic algorithm between 1 and 3999');
        expect(() => intToRoman(-200)).to.throw(Error, 'The parameter is less than zero, insert a arabic algorithm between 1 and 3999');
      });
    });
    describe("when parameter is greater than 3999", function() {
      it("should throw a Error message: 'The parameter is greater than 3999, insert a arabic algorithm between 1 and 3999'", () => {
        expect(() => intToRoman('4000')).to.throw(Error, 'The parameter is greater than 3999, insert a arabic algorithm between 1 and 3999');
        expect(() => intToRoman(5200)).to.throw(Error, 'The parameter is greater than 3999, insert a arabic algorithm between 1 and 3999');
      });
    });
    describe("when parameter is a float number", function() {
      it("should throw a Error message: 'The parameter is a float number, insert a integer number'", () => {
        expect(() => intToRoman('4.5')).to.throw(Error, 'The parameter is a float number, insert a integer number');
        expect(() => intToRoman(22.8)).to.throw(Error, 'The parameter is a float number, insert a integer number');
      });
    });
  });
  describe("> Should return a roman algorithm:", function() {
    describe("when parameter is '0000000000001'", function() {
      it("should return 'I'", () => {
        expect(intToRoman('0000000000001')).to.deep.equal('I');
      });
    });
    describe("when parameter is '012'", function() {
      it("should return 'XII'", () => {
        expect(intToRoman('012')).to.deep.equal('XII');
      });
    });
    describe("when parameter is '1'", function() {
      it("should return 'I'", () => {
        expect(intToRoman('1')).to.deep.equal('I');
      });
    });
    describe("when parameter is '10'", function() {
      it("should return 'X'", () => {
        expect(intToRoman('10')).to.deep.equal('X');
      });
    });
    describe("when parameter is '50'", function() {
      it("should return 'L", () => {
        expect(intToRoman('50')).to.deep.equal('L');
      });
    });
    describe("when parameter is '12'", function() {
      it("should return 'XII", () => {
        expect(intToRoman('12')).to.deep.equal('XII');
      });
    });
    describe("when parameter is '122'", function() {
      it("should return 'CXXII", () => {
        expect(intToRoman('122')).to.deep.equal('CXXII');
      });
    });
    describe("when parameter is '1224'", function() {
      it("should return 'MCCXXIV", () => {
        expect(intToRoman('1224')).to.deep.equal('MCCXXIV');
      });
    });
    describe("when parameter is '3999'", function() {
      it("should return 'MMMCMXCIX", () => {
        expect(intToRoman('3999')).to.deep.equal('MMMCMXCIX');
      });
    });
    describe("when parameter is 10", function() {
      it("should return 'XX'", () => {
        expect(intToRoman(10)).to.deep.equal('X');
      });
    });
    describe("when parameter is 102", function() {
      it("should return 'CII'", () => {
        expect(intToRoman(102)).to.deep.equal('CII');
      });
    });
    describe("when parameter is 200", function() {
      it("should return 'CC'", () => {
        expect(intToRoman(200)).to.deep.equal('CC');
      });
    });
    describe("when parameter is 1000", function() {
      it("should return 'M'", () => {
        expect(intToRoman(1000)).to.deep.equal('M');
      });
    });
    describe("when parameter is 1020", function() {
      it("should return 'MXX'", () => {
        expect(intToRoman(1020)).to.deep.equal('MXX');
      });
    });
    describe("when parameter is 2200", function() {
      it("should return 'MMCC'", () => {
        expect(intToRoman(2200)).to.deep.equal('MMCC');
      });
    });
    describe("when parameter is 2002", function() {
      it("should return 'MMII'", () => {
        expect(intToRoman(2002)).to.deep.equal('MMII');
      });
    });
  });
});