const mongoose = require('mongoose');

const familySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'Минимальная длина поля "name" - 2'],
    maxlength: [30, 'Максимальная длина поля "name" - 30'],
  },
  members: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
  },
  date_create: {
    type: Date,
    default: Date.now,
  },
}, { versionKey: false });

module.exports = mongoose.model('Family', familySchema);
