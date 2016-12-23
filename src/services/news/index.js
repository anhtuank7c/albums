'use strict';

const service = require('feathers-mongoose');
const news = require('./news-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: news,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/news', service(options));

  // Get our initialize service to that we can bind hooks
  const newsService = app.service('/news');

  // Set up our before hooks
  newsService.before(hooks.before);

  // Set up our after hooks
  newsService.after(hooks.after);
};
