const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: [String],
    required: true,
    validate: {
      validator: function (v) {
        return v.length === 3;
      },
      message: (props) =>
        `Array must contain exactly 3 elements. Current length: ${props.value.length}`,
    },
  },
});

module.exports = mongoose.model('Question', questionSchema);
