const express = require('express');
const controller = require('./access.controller');

const router = express.Router();

router.route('/signin')
    .post(controller.signin);
router.route('/signup')
    .post(controller.signup);

module.exports = router;
