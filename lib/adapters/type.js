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
function DataType(dt) {

    if (!dt || typeof dt !== 'object') {
        throw new TypeError('Invalid database type specified.');
    }

    if (!(this instanceof DataType)) {
        return new DataType(dt);
    }

}

module.exports = DataType;

