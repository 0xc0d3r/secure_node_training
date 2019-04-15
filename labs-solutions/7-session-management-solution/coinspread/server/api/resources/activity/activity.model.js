const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  from: { type: String, required: true },
  note: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('activity', activitySchema);