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
function Database(driver) {

    if (!driver || typeof driver !== 'object') {
        throw new TypeError('Invalid driver specified.');
    }

    if (!(this instanceof Database)) {
        return new Database(driver);
    }

}

module.exports = Database;
