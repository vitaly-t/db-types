'use strict';

var lib = require('../');

describe("Main", function () {

    it("must initialize correctly", function () {
        expect(typeof lib.Database).toBe('function');
        expect(typeof lib.DataType).toBe('function');
    });

});
