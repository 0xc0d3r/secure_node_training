const Boom = require('boom');
const RateLimiterMemory = require('rate-limiter-flexible').RateLimiterMemory;

// A rate limiter to using in-memory Block Strategy 
const rateLimiter = new RateLimiterMemory({
    points: 10,
    duration: 10,
    blockDuration: 1 //sec
});

const rateLimit = async (req, res, next) => {
    try {
        await rateLimiter.consume(req.connection.remoteAddress, 1);
        next();
    } catch (err) {
        next(Boom.tooManyRequests());
    }
};
module.exports = rateLimit;