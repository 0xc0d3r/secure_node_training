const activityModel = require('../activity/activity.model');
const userModel = require('../user/user.model');
const walletModel = require('../wallet/wallet.model');

const queries = require('../../util/queries');

const processPayment = (paymentInfo) => {
};

exports.create = async (req, res, next) => {
    try {
        processPayment(req.body);
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
