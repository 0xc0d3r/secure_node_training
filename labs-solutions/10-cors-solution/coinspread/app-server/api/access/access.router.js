const express = require('express');
const controller = require('./access.controller');
const guard = require('./access.guard');

const router = express.Router();

router.route('/signin')
    .post(guard.validateSignInRequest, controller.signin);
router.route('/signup')
    .post(guard.validateSignUpRequest, controller.signup);

module.exports = router;
