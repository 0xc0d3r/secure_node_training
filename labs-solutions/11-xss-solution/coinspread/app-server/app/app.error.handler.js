/**
 * Application-wide error handler.
 */
const Boom = require('boom');

const addErrorHandler = function (app) {

    // A middleware to handle requests to any unimplemenetd routes
    // It creates a 404 error and invokes error handler
    app.use(function (req, res, next) {
        next(Boom.notFound('Resouce Not Found!'));
    });

    // An Error Handler to customize the error response in JSON format
    // It gets invoked for uncaught synchronous errors and calls to next(err)
    app.use(function (err, req, res, next) {
        // If headers have already been sent to the client, delegate to the default Express error handler  
        // https://expressjs.com/en/guide/error-handling.html
        if (res.headersSent) {
            return next(err);
        }

        // Convert error to Boom Error Object, if it is not already, so that we can use utility functions (e.g. isServer) on it
        err = err.isBoom ? err : Boom.boomify(err);

        // Cutomize the error and response contents based on the environment
        // Avoid exposing internal server details via error message in the response 
        let message = err.message;
        if (err.isServer && !app.get('env') === 'development') {
            message = 'Internal Server Error';
        }

        // Send Error response to server
        res.status(err.output.statusCode || 500);
        res.send({ message });
    });
};

module.exports = addErrorHandler;