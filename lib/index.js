'use strict';

var nodeHighVer = +process.versions.node.split('.')[0];

// istanbul ignore if
if (nodeHighVer < 4) {
    throw new Error('Minimum Node.js version required by db-types is 4.x');
}

var Database = require('./adapters/database');
var DataType = require('./adapters/type');

module.exports = {
    Database: Database,
    DataType: DataType
};
