/*!
 * js-crc32 <https://github.com/orvn/js-crc32>
 * Apache license
 */

'use strict';
const { crc32Table } = require('./lookups.js');

// Polynomial division implementation (slower, non-default)
function crc32_polynomialDivision(str) {
    const polynomial = 0xEDB88320;
    let crc = 0xFFFFFFFF;

    for (let i = 0, len = str.length; i < len; i++) {
    let byte = str.charCodeAt(i);
    crc ^= byte;
    for (let j = 0; j < 8; j++) {
        const mask = -(crc & 1);
        crc = (crc >>> 1) ^ (polynomial & mask);
    }
    }
    // Handle conversion to hexadecimal string
    return ((crc ^ 0xFFFFFFFF) >>> 0).toString(16).padStart(8, '0');
}

// Lookup table implementation (this is the default because it's faster, due to being a precalculated table)
function crc32_lookupTable(str) {
    let crc = 0xFFFFFFFF;

    for (let i = 0, len = str.length; i < len; i++) {
    crc = (crc >>> 8) ^ crc32Table[(crc ^ str.charCodeAt(i)) & 0xFF];
    }

    return ((crc ^ 0xFFFFFFFF) >>> 0).toString(16).padStart(8, '0');
}

// Export complete crc32 function

module.exports = function crc32(str, usePolynomialDivision = false) {
    if (usePolynomialDivision) {
    return crc32_polynomialDivision(str);
    } else {
    return crc32_lookupTable(str);
    }
}
