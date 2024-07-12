const mongoose = require('mongoose');

const readStatusSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  notificationId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('ReadStatus', readStatusSchema);
