// require the Joi module
const Joi = require('joi');
const Boom = require('Boom');
const accessController = require('./access.controller');

// Validation schema for a signup request
const signupSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    address_line1: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string(),
    country: Joi.string().required(),
    tax_id: Joi.string().required()
});

// Validate signup request body
exports.validateSignUpRequest = (req, res, next) => {
    const { error, value } = Joi.validate(req.body, signupSchema);
    if (error) {
        next(Boom.badRequest(error.message));
        return;
    }
    next();
};

// Declare validation schema for a signin request, to require username and password  to be non-empty strings
const signinSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
});

// Validate signin request body against Joi schema.
// If not valid throw a Boom badRequest error response.
exports.validateSignInRequest = (req, res, next) => {
    const { error, value } = Joi.validate(req.body, signinSchema);
    if (error) {
        next(Boom.badRequest(error));
        return;
    }
    next();
};



