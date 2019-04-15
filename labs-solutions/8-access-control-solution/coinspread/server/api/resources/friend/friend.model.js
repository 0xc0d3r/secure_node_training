const mongoose = require('mongoose');
const schema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    friendUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }
}, { timestamps: true });
module.exports = mongoose.model('friend', schema);

