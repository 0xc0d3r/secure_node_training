const Joi = require('joi');
const Boom = require('boom');

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


