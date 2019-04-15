const mongoose = require('mongoose');
const schema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    currency: { type: String, required: true },
    balance: { type: Number, required: true },
    address: { type: String, requires: true }
}, { timestamps: true })
module.exports = mongoose.model('wallet', schema);

