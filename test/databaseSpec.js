'use strict';

var lib = require('../');

describe("Database", function () {

    it("must initialize correctly", function () {
        expect(new lib.Database({}) instanceof lib.Database).toBe(true);
    });

    it("must throw on invalid parameters", function () {
        var error = new TypeError('Invalid driver specified.');
        expect(function () {
            new lib.Database(undefined);
        }).toThrow(error);
        expect(function () {
            new lib.Database(123);
        }).toThrow(error);
        expect(function () {
            new lib.Database('hello');
        }).toThrow(error);
    });

    it("must find types", function () {
        var db = new lib.Database({});
        db.find({id: 123, name: 'hello'});
    });
});
