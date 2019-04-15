const Boom = require('boom');
const activityModel = require('../activity/activity.model');
const userModel = require('../user/user.model');
const walletModel = require('../wallet/wallet.model');
const friendModel = require('../friend/friend.model');

const queries = require('../../util/queries');

const processPayment = (paymentInfo) => {
};

exports.findFriendById = (req, res, next, id) => {
    return friendModel.find({ friendUserId: id })
        .then(doc => {
            if (!doc) {
                next(Boom.notFound());
            } else {
                req.docFromId = doc[0];
                userModel.findById(req.docFromId.userId)    
                    .then(userDoc => {
                        req.userIdFromFriendDoc = userDoc.id;
                        next();
                    })
                    .catch(err => {
                        next(err);
                    });
            }
        })
        .catch(error => {
            next(error);
        });
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

