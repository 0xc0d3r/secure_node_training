const express = require('express');
const companionController = require('./companion.controller');
const guard = require('./companion.guard');
const router = express.Router();

router.route('/')
    .get(companionController.getAll);

router.param('id', companionController.findById);
router.route('/:id')
    .get(companionController.getOne);

module.exports = router;