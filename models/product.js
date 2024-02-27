const mongoose = require('mongoose');
const { isURL } = require('validator');

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date_start: {
    type: Date,
  },
  date_end: {
    type: Date,
  },
  quantity: {
    type: Number,
  },
  quantity_sufix: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  storage: {
    type: String,
  },
  image: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Family',
    required: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('Movie', movieSchema);
