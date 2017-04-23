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

}

module.exports = Database;
