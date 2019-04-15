const express = require('express');
const paymentController = require('./payment.controller');
const guard = require('./payment.guard');
const router = express.Router();

router.param('id', paymentController.findFriendById);
// TODO: LAB TASK 4: Protect the payment route by checking if the user owns the wallet
router.route('/:id')
    .all(guard.validatePaymentPayload)
    .post(paymentController.create);

module.exports = router;