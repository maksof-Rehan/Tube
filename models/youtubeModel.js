const mongoose = require('mongoose');

const youtubeSchema = new mongoose.Schema({
  channel: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  requiredSubscriber: {
    type: Number,
    required: true
  },
  completedSubscriber: {
    type: Number,
    default: 0
  },
  requiredViews: {
    type: Number,
    required: true
  },
  completedViews: {
    type: Number,
    default: 0
  },
  requiredWatchTime: {
    type: Number,
    required: true
  },
  completedWatchTime: {
    type: Number,
    default: 0
  },
  isCompletedWork: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('YouTube', youtubeSchema);