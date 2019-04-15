const express = require('express');
const companionRouter = require('./resources/companion');
const walletRouter = require('./resources/wallet');
const activityRouter = require('./resources/activity');
const friendRouter = require('./resources/friend');
const paymentRouter = require('./resources/payment');

const apiRouter = express.Router();
apiRouter.use('/activity', activityRouter);
apiRouter.use('/companion', companionRouter);
apiRouter.use('/wallet', walletRouter);
apiRouter.use('/companion', companionRouter);
apiRouter.use('/friend', friendRouter);
apiRouter.use('/payment', paymentRouter);

module.exports = apiRouter;