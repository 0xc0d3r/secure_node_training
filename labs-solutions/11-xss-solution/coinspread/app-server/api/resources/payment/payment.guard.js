const Joi = require('joi');
const Boom = require('boom');
const wallet = require('../wallet/wallet.model');

const paymentSchema = Joi.object({
    amount: Joi.number().min(0).required(),
    note: Joi.string().required(),
    wallet: Joi.string().alphanum().length(24),
    friendUserId: Joi.string().alphanum().length(24)
});

exports.validatePaymentPayload = (req, res, next) => {
    const { error, value } = Joi.validate(req.body, paymentSchema);
    if (!error) {
        next();
        return;
    }
    next(Boom.badRequest(error));
};

// Middleware to check that user own's the wallet to transfer the coins from
exports.requireOwner = (req, resp, next) => {
    wallet.findById(req.body.wallet).then(walletDoc => {
        if (walletDoc.userId === req.user.id) {
            next();
            return;
        }
        next(Boom.unauthorized('Invalid Access'));
    }).catch(err => {
        next(err);
    });
};

