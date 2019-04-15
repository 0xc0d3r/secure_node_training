const express = require('express');
const paymentController = require('./payment.controller');
const guard = require('./payment.guard');
const router = express.Router();


router.route('/')
    .post(guard.validatePaymentPayload, paymentController.create);

module.exports = router;