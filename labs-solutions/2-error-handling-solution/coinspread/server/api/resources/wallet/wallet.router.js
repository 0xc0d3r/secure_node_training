const express = require('express');
const walletController = require('./wallet.controller');
const guard = require('./wallet.guard');
const router = express.Router();

router.route('/')
    .get(walletController.getAll)
    .post(walletController.createOne);

router.param('id', walletController.findById);

router.route('/:id')
    .get(walletController.getOne)
    .put(walletController.updateOne)
    .delete(walletController.deleteOne);

module.exports = router;