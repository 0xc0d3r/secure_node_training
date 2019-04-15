const activityModel = require('../activity/activity.model');
const userModel = require('../user/user.model');
const walletModel = require('../wallet/wallet.model');
const queries = require('../../util/queries');
const paymentGateway = require('./payment.gateway');


const sendSuccessResponse = async (req, res, next) => {
    try {
        const user = await queries.findById(userModel, req.user.id);
        const friend = await queries.findById(userModel, req.body.friendUserId);
        const wallet = await queries.findById(walletModel, req.body.wallet);

        const activity = await queries.createOne(activityModel, {
            userId: friend.id,
            from: `${user.firstname} ${user.lastname} sent you ${req.body.amount} ${wallet.currency}`,
            note: req.body.note
        });
        res.status(201).json({ message: 'Payment Scheduled Successfully.' });
    } catch (err) {
        next(err);
    }
};

// TODO: Catch the error sent from the first four useExchangeX() methods and print the error message on console
const processPayment = (paymentInfo) => {
    paymentGateway.useExchange1();
    paymentGateway.useExchange2();
    paymentGateway.useExchange3();
    paymentGateway.useExchange4();
    paymentGateway.useExchange5();
};

exports.create = (req, res, next) => {
    processPayment(req.body);
    sendSuccessResponse(req, res, next);
};