const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

// Secret key to use for signing JWT
const jwtSecret = process.env.JWT_SECRET || 'mysupersecretkeyX';

// The JWT expiry time
const expiresIn = process.env.JWT_EXPIRES_IN || '30m';

// LAB TASK 1: Create a utility to sign and return payload object as JWT.
exports.signToken = (payload) => {
    // Payload must be an object and not string to allow expiresIn
    return jwt.sign(payload, jwtSecret, { expiresIn });
};

// LAB TASK 2: Create a middleware that validates JWT token in a request authorization header
exports.requireValidToken = (req, res, next) => {
    // Create the jwt middleware from expressJwt
    const jwtChecker = expressJwt({ secret: jwtSecret });
    // Invoke middleware, which calls next() on successful validation or next(err) if failed.
    // If the token is valid, req.user will be set with the decoded JWT payload by the middleware.
    jwtChecker(req, res, next);
};
