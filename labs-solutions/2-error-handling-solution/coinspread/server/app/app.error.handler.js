/**
 * Application-wide error handler.
 */
const Boom = require('boom');

const addErrorHandler = function (app) {

    // A middleware to handle requests to any unimplemenetd routes
    // It creates a 404 error and invokes error handler
    app.use(function (req, res, next) {
        // LAB Solution: Use the Boom package to create notFound Error
        next(Boom.notFound('Resource not found!'));
    });

    // LAB Soultion:  Add a custom error handler
    // An Error Handler to customize the error response in JSON format
    // It gets invoked for uncaught synchronous errors and calls to next(err)
    app.use(function (err, req, res, next) {
        // If headers have already been sent to the client, delegate to the default Express error handler  
        // https://expressjs.com/en/guide/error-handling.html
        if (res.headersSent) {
            return next(err);
        }

        // Cutomize the error and response contents based on the environment
        // Avoid exposing internal server details via error message in the response 
        err = err.isBoom ? err : Boom.boomify(err);
        let message = err.message;
        if (err.isServer && !app.get('env') === 'development') {
            message = 'Internal Server Error';
        }
        // Send Error response to server
        res.status(err.status || 500);
        res.send({ message });
    });
};

module.exports = addErrorHandler;