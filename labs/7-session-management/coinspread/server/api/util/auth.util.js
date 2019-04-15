const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

// Secret key to use for signing JWT
const jwtSecret = process.env.JWT_SECRET || 'mysupersecretkeyX';

// The JWT expiry time
const expiresIn = process.env.JWT_EXPIRES_IN || '30m';

// TODO LAB TASK 1: Implement a utility to sign and return payload object as JWT.
exports.signToken = (payload) => {
};

// TODO LAB TASK 2: Implement a middleware that validates JWT token in a request authorization header
exports.requireValidToken = (req, res, next) => {
};
