const mongoose = require('mongoose');

const privateSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  question: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('PrivateQuestion', privateSchema);
