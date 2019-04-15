const express = require('express');
const activityController = require('./activity.controller');
const router = express.Router();


router.route('/')
    .get(activityController.getAll);
    

module.exports = router;