/**
 * Application-wide error handler.
 */
const Boom = require('boom');

const addErrorHandler = function (app) {

    // A middleware to handle requests to any unimplemenetd routes
    // It creates a 404 error and invokes error handler
    app.use(function (req, res, next) {
        // TODO: LAB: Use the Boom package to construct a 'Resource not found!' Error
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    });


    // TODO: LAB: Add a custom error handler that would send response in format {"message": <Error Message>}"

};

module.exports = addErrorHandler;