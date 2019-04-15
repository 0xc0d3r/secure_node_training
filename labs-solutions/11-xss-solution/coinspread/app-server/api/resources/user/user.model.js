const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  tax_id: { type: String, required: true },
  address_line1: { type: String, required: true },
  address_line2: { type: String },
  city: { type: String, required: true },
  country: { type: String, required: true },
  zip: { type: String },
  role: { type: String, default: 'user' }
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);