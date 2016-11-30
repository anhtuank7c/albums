'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('albums service', function() {
  it('registered the albums service', () => {
    assert.ok(app.service('albums'));
  });
});
