const Joi = require('joi');
const authUtil = require('../../util/auth.util');
const Boom = require('boom');

exports.requireAdmin = (req, resp, next) => {
    if (authUtil.isAdmin(req)) {
        next();
        return;
    }
    next(Boom.unauthorized('Invalid Access'));
};

const feesSchema = Joi.object({
    btc_fees: Joi.number().min(0).required(),
    bch_fees: Joi.number().min(0).required(),
    eth_fees: Joi.number().min(0).required(),
    ltc_fees: Joi.number().min(0).required()
});

exports.validateUpdatePayload = (req, res, next) => {
    const { error, value } = Joi.validate(req.body, feesSchema);
    if (!error) {
        next();
        return;
    }
    next(Boom.badRequest(error));
};


