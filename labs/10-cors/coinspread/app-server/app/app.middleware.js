const bodyParser = require('body-parser');
const addRequestId = require('express-request-id')();
const cors = require('cors');
const logHandler = require('./app.logger');
const addErrorHandler = require('./app.error.handler');
const rateLimit = require('../app/app.rate.limiter');

exports.addBeforeRoutes = (app) => {
    app.use(rateLimit);
    //TODO: LAB Task 1: Examine existing CORS configurations (object passed inside cors() middleware) from a hacker’s perspective. Do you find any weakness?
    //TODO: LAB Task 2: Tighten the CORS configuration to allow cross-orgin requests originated only from a trusted web server domain http://localhost:4000.
    app.use(cors({
        origin: true,
        credentials: true
    }));
    app.use(addRequestId);
    logHandler.addRequestLogger(app);
    app.use(bodyParser.json());
};

exports.addAfterRoutes = (app) => {
    addErrorHandler(app);
};
