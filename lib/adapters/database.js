'use strict';

/**
 * @class Database
 * @description
 * Represents configuration of a server driver.
 *
 * @param {Object} driver
 * Database driver object.
 *
 * @returns {Database}
 */
class Database {

    constructor(driver) {
        if (!driver || typeof driver !== 'object') {
            throw new TypeError('Invalid driver specified.');
        }
    }

    /**
     * @method Database#find
     * @description
     * Searches for matching data types, based on key attributes.
     *
     * @param {String|Number} id
     * Type Id.
     *
     * @param {String} name
     * Type Name.
     *
     * @returns {DataType[]}
     * List of matching types (an empty array when no matches found).
     */
    find({id, name}) {
        return [{id, name}]; // temporary
    }
}

module.exports = Database;
