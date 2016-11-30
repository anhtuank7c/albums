'use strict';

// musics-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicsSchema = new Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true, 'default': 'Anh Tuan'},
  avatar: { type: String, required: true},
  view: { type: Number, required: false, 'default': 0},
  like: { type: Number, required: false, 'default': 0},
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const musicsModel = mongoose.model('musics', musicsSchema);

module.exports = musicsModel;
