const bodyParser = require('body-parser');
const cors = require('cors');
const logHandler = require('./app.logger');
const addErrorHandler = require('./app.error.handler');

exports.addBeforeRoutes = (app) => {
    app.use(cors());
    logHandler.addRequestLogger(app);
    app.use(bodyParser.json());
};

exports.addAfterRoutes = (app) => {
    addErrorHandler(app);
};
