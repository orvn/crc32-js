'use strict';

require('mocha');
const assert = require('assert');
const crc32 = require('./index.js');

describe('crc32', function() {
    it('Return hex value for CRC32 of a string foo using a lookup table:', function() {
      let result = crc32('foo');
      assert.equal(result, "8c736521");
    });
    it('Return hex value for CRC32 of a string foo using polynomial division:', function() {
      let result = crc32('foo', true, true);
      assert.equal(result, "8c736521");
    });
    it('Return hex value for CRC32 of a string foo using a lookup table:', function() {
      let result = crc32('foo', false, false);
      assert.equal(result, "2356372769");
    });
    it('Return decimal value for CRC32 of a string foo using polynomial division:', function() {
      let result = crc32('foo', true, false);
      assert.equal(result, "2356372769");
    });
  });
