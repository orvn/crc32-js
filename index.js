/*!
 * js-crc32 <https://github.com/orvn/js-crc32>
 * Apache license
 */

'use strict';
const { crc16Table, crc32Table } = require('./lookups.js');

function crc(str, table, polynomial, usePolynomialDivision = false, hexFormat = true) {
    let crc;
    if (usePolynomialDivision) {
        crc = crc_polynomialDivision(str, polynomial);
    } else {
        crc = crc_lookupTable(str, table);
    }
    return hexFormat ? crc.toString(16).padStart(8, '0') : crc.toString(10);
}

function crc_polynomialDivision(str, polynomial) {
    let crc = 0xFFFFFFFF;
    for (let i = 0, len = str.length; i < len; i++) {
        let byte = str.charCodeAt(i);
        crc ^= byte;
        for (let j = 0; j < 8; j++) {
            const mask = -(crc & 1);
            crc = (crc >>> 1) ^ (polynomial & mask);
        }
    }
    return (crc ^ 0xFFFFFFFF) >>> 0;
}

function crc_lookupTable(str, table) {
    let crc = 0xFFFFFFFF;
    for (let i = 0, len = str.length; i < len; i++) {
        crc = (crc >>> 8) ^ table[(crc ^ str.charCodeAt(i)) & 0xFF];
    }
    return (crc ^ 0xFFFFFFFF) >>> 0;
}

// Export complete crc32 and crc16 functions
module.exports = {
    crc32: function(str, usePolynomialDivision = false, hexFormat = true) {
        return crc(str, crc32Table, 0xEDB88320, usePolynomialDivision, hexFormat);
    },
    crc16: function(str, usePolynomialDivision = false, hexFormat = true) {
        return crc(str, crc16Table, 0x1021, usePolynomialDivision, hexFormat);
    }
}
