const express = require('express');
const walletController = require('./wallet.controller');
const guard = require('./wallet.guard');
const router = express.Router();


router.route('/')
    .get(walletController.getAll)
    .post(guard.validateCreatePayload, walletController.createOne);

router.param('id', walletController.findById);

router.route('/:id')
    .all(guard.validateId)
    .get(walletController.getOne)
    .put(guard.validateUpdatePayload, walletController.updateOne)
    .delete(walletController.deleteOne);

module.exports = router;