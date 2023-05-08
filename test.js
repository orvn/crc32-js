'use strict';

require('mocha');
const assert = require('assert');
const crc32 = require('./index.js');

describe('crc32', function() {
    it('Return value for CRC32 of a string foo using a lookup table:', function() {
      let result = crc32('foo');
      assert.equal(result, "8c736521");
    });
    it('Return value for CRC32 of a string foo using polynomial division:', function() {
      let result = crc32('foo', true);
      assert.equal(result, "8c736521");
    });
  });
