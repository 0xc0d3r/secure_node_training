const express = require('express');
const feesController = require('./fees.controller');
const guard = require('./fees.guard');
const router = express.Router();

// TODO: LAB TASK 3: Verify that the user has admin role before allowing access to Fees Resources
router.route('/')
    .get(feesController.get)
    .put(guard.validateUpdatePayload, feesController.update);

module.exports = router;