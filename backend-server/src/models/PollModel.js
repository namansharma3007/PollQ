const mongoose = require('mongoose');
const { Schema } = mongoose;

const pollSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
  },
  description: {
    type: String,
    maxLength: 500,
  },
  options: [{
    type: String,
    required: true,
  }],
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  allowMultipleVotes: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  votes: [{
    type: Schema.Types.ObjectId,
    ref: 'Vote',
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Poll', pollSchema);