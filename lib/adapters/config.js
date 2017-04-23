'use strict';

/**
 * @class ConfigAdapter
 * @description
 * Represents configuration of a server driver.
 *
 * @param {Object} driverConfig
 *
 * @returns {ConfigAdapter}
 */
function ConfigAdapter(driverConfig) {

    if (!driverConfig || typeof driverConfig !== 'object') {
        throw new TypeError('Invalid driver specified.');
    }

    if (!(this instanceof ConfigAdapter)) {
        return new ConfigAdapter(driverConfig);
    }

}

module.exports = ConfigAdapter;
