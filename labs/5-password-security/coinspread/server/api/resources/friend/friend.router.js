const express = require('express');
const friendController = require('./friend.controller');
const guard = require('./friend.guard');
const router = express.Router();

router.route('/')
    .get(friendController.getAll)
    .post(guard.validateFriendUserId, friendController.createOne);

router.param('id', friendController.findById);
router.route('/:id')
    .all(guard.validateFriendUserId)
    .get(friendController.getOne)
    .post(friendController.createOne)
    .delete(friendController.deleteOne);

module.exports = router;