const express = require('express');
const paymentController = require('./payment.controller');
const router = express.Router();


router.route('/')
    .post(paymentController.create);

module.exports = router;