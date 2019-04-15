const express = require('express');
const controller = require('./access.controller');
const guard = require('./access.guard');

const router = express.Router();

// Handle requests to the /signin endpoint
// TODO: LAB Task 3 - Use guard middleware to validate the input request before passing the request to controller
router.route('/signin').post(controller.signin);

// Handle requests to /signup endpoint
router.route('/signup').post(guard.validateSignUpRequest, controller.signup);

module.exports = router;
