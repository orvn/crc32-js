/*!
 * js-crc32 <https://github.com/orvn/js-crc32>
 * Apache license
 */

'use strict';

module.exports = function crc32Polynomial(str) {
    let crc = 0xFFFFFFFF;
  
    for (let i = 0, len = str.length; i < len; i++) {
      let byte = str.charCodeAt(i);
      crc ^= byte;
  
      for (let j = 0; j < 8; j++) {
        const mask = -(crc & 1);
        crc = (crc >>> 1) ^ (0xEDB88320 & mask);
      }
    }
  
    crc = (crc ^ 0xFFFFFFFF) >>> 0;
  
    // Convert to little endian byte order
    crc = ((crc & 0xFF) << 24) | (((crc >>> 8) & 0xFF) << 16) | (((crc >>> 16) & 0xFF) << 8) | ((crc >>> 24) & 0xFF);
  
    // Properly handle the conversion of the CRC checksum to a hexadecimal string
    return (crc >>> 0).toString(16).padStart(8, '0');
  }
