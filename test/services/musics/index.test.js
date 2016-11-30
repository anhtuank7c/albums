'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('musics service', function() {
  it('registered the musics service', () => {
    assert.ok(app.service('musics'));
  });
});
