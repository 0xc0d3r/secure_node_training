const bodyParser = require('body-parser');
const addRequestId = require('express-request-id')();
const cors = require('cors');
const logHandler = require('./app.logger');
const addErrorHandler = require('./app.error.handler');

exports.addBeforeRoutes = (app) => {
    app.use(cors());
    app.use(addRequestId);
    logHandler.addRequestLogger(app);
    app.use(bodyParser.json());
};

exports.addAfterRoutes = (app) => {
    addErrorHandler(app);
};
