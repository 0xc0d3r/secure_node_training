const bodyParser = require('body-parser');
const addRequestId = require('express-request-id')();
const cors = require('cors');
const logHandler = require('./app.logger');
const addErrorHandler = require('./app.error.handler');
const rateLimit = require('../app/app.rate.limiter');

exports.addBeforeRoutes = (app) => {
    // LAB TASK 2: Include the a rate limiter middleware before routes are handled
    app.use(rateLimit);
    app.use(cors());
    app.use(addRequestId);
    logHandler.addRequestLogger(app);
    app.use(bodyParser.json());
};

exports.addAfterRoutes = (app) => {
    addErrorHandler(app);
};
