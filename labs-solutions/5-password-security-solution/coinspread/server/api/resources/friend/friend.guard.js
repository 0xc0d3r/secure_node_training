/* Friend API Specific validations */
const Joi = require('joi');
const authUtil = require('../../util/auth.util');
const Boom = require('boom');

const idSchema = Joi.string().alphanum().length(24);

exports.validateFriendUserId = (req, res, next) => {
    const { error, value } = Joi.validate(req.body.friendUserId, idSchema);
    if (!error) {
        next();
        return;
    }
    next(Boom.badRequest(error));
};