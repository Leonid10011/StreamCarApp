const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Notification', notificationSchema);
