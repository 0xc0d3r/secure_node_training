const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

// Secret key and expiry to use while signing JWT
const jwtSecret = process.env.JWT_SECRET || 'mysupersecretkeyX';
const expiresIn = process.env.JWT_EXPIRES_IN || '30m';

// A utility to sign and return payload object as JWT.
exports.signToken = (payload) => {
    // Payload must be an object and not string to allow expiresIn
    return jwt.sign(payload, jwtSecret, { expiresIn });
};

// A a middleware that validates JWT token in a request authorization header
exports.requireValidToken = (req, res, next) => {
    const jwtChecker = expressJwt({ secret: jwtSecret });
    // If the token is valid, req.user will be set with the decoded JWT payload by the middleware.
    jwtChecker(req, res, next);
};

exports.isAdmin = (req) => {
    if (req.user !== null && req.user.scope === 'admin') {
        return true;
    }
    return false;
};

exports.isOwner = (req) => {
    if (req.docFromId !== null
        && req.user !== null
        && req.user.id !== null
        && req.docFromId.userId === req.user.id) {
        return true;
    }
    return false;
};