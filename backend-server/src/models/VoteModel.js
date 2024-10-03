const mongoose = require('mongoose');
const { Schema } = mongoose;

const voteSchema = new Schema({
  poll: {
    type: Schema.Types.ObjectId,
    ref: 'Poll',
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  option: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Vote', voteSchema);