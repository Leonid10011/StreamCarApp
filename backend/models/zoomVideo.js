const mongoose = require('mongoose');

const zoomVideoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  link: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ZoomVideo', zoomVideoSchema);
