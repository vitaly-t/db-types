'use strict';

var lib = require('../');

describe("Database", function () {

    it("must initialize correctly", function () {
        expect(lib.Database({}) instanceof lib.Database).toBe(true);
        expect(new lib.Database({}) instanceof lib.Database).toBe(true);
    });

    it("must throw on invalid parameters", function () {
        var error = new TypeError('Invalid driver specified.');
        expect(function () {
            lib.Database(undefined);
        }).toThrow(error);
        expect(function () {
            lib.Database(123);
        }).toThrow(error);
        expect(function () {
            lib.Database('hello');
        }).toThrow(error);
    });

});
