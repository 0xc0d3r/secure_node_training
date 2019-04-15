/* Wallet API Specific validations go in this file */
const Joi = require('joi');
const authUtil = require('../../util/auth.util');
const Boom = require('boom');

const currencies = ['BTC', 'BCH', 'ECH', 'USD'];
const idSchema = Joi.string().alphanum().length(24);

const createWalletSchema = Joi.object({
    name: Joi.string().max(50).required(),
    currency: Joi.string().allow(currencies).required(),
    balance: Joi.number().min(0).required()
});

const updateWalletSchema = Joi.object({
    name: Joi.string().max(50),
    balance: Joi.number().min(0),

});

exports.validateId = (req, res, next) => {
    const { error, value } = Joi.validate(req.params.id, idSchema);
    if (!error) {
        next();
        return;
    }
    next(Boom.badRequest(error));
};

exports.validateUpdatePayload = (req, res, next) => {
    const { error, value } = Joi.validate(req.body, updateWalletSchema);
    if (!error) {
        next();
        return;
    }
    next(Boom.badRequest(error));
};

exports.validateCreatePayload = (req, res, next) => {
    const { error, value } = Joi.validate(req.body, createWalletSchema);
    if (!error) {
        next();
        return;
    }
    next(Boom.badRequest(error));
};
