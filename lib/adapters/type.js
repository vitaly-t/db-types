'use strict';

/**
 * @class TypeAdapter
 * @description
 * Represents a single database type.
 *
 * @param {Object} driverType
 *
 * @returns {TypeAdapter}
 */
function TypeAdapter(driverType) {

    if (!driverType || typeof driverType !== 'object') {
        throw new TypeError('Invalid driver specified.');
    }

    if (!(this instanceof TypeAdapter)) {
        return new TypeAdapter(driverType);
    }

}

module.exports = TypeAdapter;

