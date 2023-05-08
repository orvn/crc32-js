'use strict';

require('mocha');
const assert = require('assert');
const crc32 = require('./index.js');

describe('crc32', function() {
    it('Returns specific value for CRC32 of a string foo:', function() {
      let result = crc32('foo');
      assert.equal(result, "2165738c");
    });
  });
