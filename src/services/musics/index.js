'use strict';

const service = require('feathers-mongoose');
const musics = require('./musics-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: musics,
    paginate: {
      default: 5,
      max: 1000
    }
  };

  // Initialize our service with any options it requires
  app.use('/musics', service(options));

  // Get our initialize service to that we can bind hooks
  const musicsService = app.service('/musics');

  // Set up our before hooks
  musicsService.before(hooks.before);

  // Set up our after hooks
  musicsService.after(hooks.after);
};
