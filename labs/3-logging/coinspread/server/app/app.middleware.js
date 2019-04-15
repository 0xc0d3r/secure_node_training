const bodyParser = require('body-parser');
const addRequestId = require('express-request-id')();
const cors = require('cors');
const logHandler = require('./app.logger');
const addErrorHandler = require('./app.error.handler');

exports.addBeforeRoutes = (app) => {
    app.use(cors());

    // TODO LAB TASK 1: Include middleware to add a unique correlation id to each request 
    // Refer to express-request-id package details if needed: https://www.npmjs.com/package/express-request-id

    logHandler.addRequestLogger(app);
    app.use(bodyParser.json());
};

exports.addAfterRoutes = (app) => {
    addErrorHandler(app);
};
