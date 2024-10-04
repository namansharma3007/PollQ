const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  role: {
    type: String,
    enum: ['admin'],
    default: 'admin',
  },
  actions: [{
    type: String,
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Admin', adminSchema);