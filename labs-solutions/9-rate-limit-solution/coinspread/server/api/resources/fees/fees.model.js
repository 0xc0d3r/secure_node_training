const mongoose = require('mongoose');
const schema = mongoose.Schema({
    btc_fees: { type: Number, default: 0.5 },
    bch_fees: { type: Number, default: 0.5 },
    eth_fees: { type: Number, default: 0.5 },
    ltc_fees: { type: Number, default: 0.5 }
}, { timestamps: true })
module.exports = mongoose.model('fees', schema);

