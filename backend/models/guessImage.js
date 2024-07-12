const mongoose = require('mongoose');

const guessImageSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  location: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('GuessImage', guessImageSchema);
