'use strict';

// news-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  preview: { type: String, required: true },
  view: { type: Number, 'default': 0 },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const newsModel = mongoose.model('news', newsSchema);

module.exports = newsModel;