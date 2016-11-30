'use strict';

const service = require('feathers-mongoose');
const albums = require('./albums-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: albums,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/albums', service(options));

  // Get our initialize service to that we can bind hooks
  const albumsService = app.service('/albums');

  // Set up our before hooks
  albumsService.before(hooks.before);

  // Set up our after hooks
  albumsService.after(hooks.after);
};
