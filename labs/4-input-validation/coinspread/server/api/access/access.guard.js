// Import npm modules
const Joi = require('joi');
const Boom = require('Boom');

// Validation schema for a signup request
const signupSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    address_line1: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string(),
    country: Joi.string().required()
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

//TODO: LAB Task 1 - Define the validation schema for signin request. Require username and password to be non-empty strings

//TODO: LAB Task 2- Validate signin request body against Joi schema. If not valid, send a 400 Bad Error Response



