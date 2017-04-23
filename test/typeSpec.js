'use strict';

var lib = require('../');

describe("DataType", function () {

    it("must initialize correctly", function () {
        expect(lib.DataType({}) instanceof lib.DataType).toBe(true);
        expect(new lib.DataType({}) instanceof lib.DataType).toBe(true);
    });

    it("must throw on invalid parameters", function () {
        var error = new TypeError('Invalid database type specified.');
        expect(function () {
            lib.DataType(undefined);
        }).toThrow(error);
        expect(function () {
            lib.DataType(123);
        }).toThrow(error);
        expect(function () {
            lib.DataType('hello');
        }).toThrow(error);
    });

});
