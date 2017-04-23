'use strict';

/**
 * @class DataType
 * @description
 * Represents a single data type.
 *
 * @param {Object} dt
 * Database Data Type.
 *
 * @returns {DataType}
 */
class DataType {

    constructor(dt) {
        if (!dt || typeof dt !== 'object') {
            throw new TypeError('Invalid database type specified.');
        }
    }
}

module.exports = DataType;

