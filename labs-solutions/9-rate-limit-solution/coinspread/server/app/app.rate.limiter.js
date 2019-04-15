const Boom = require('boom');
const RateLimiterMemory = require('rate-limiter-flexible').RateLimiterMemory;

// LAB TASK 1: Create a rate limiter to using in-memory Block Strategy 
const rateLimiter = new RateLimiterMemory({
    points: 4,
    duration: 1,
    blockDuration: 10 //sec
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