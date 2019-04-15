const appGuard = require('./app.guard');
const apiRouter = require('../api');
const accessRouter = require('../api/access');

exports.addRoutes = (app) => {
    app.use('/access', accessRouter);
    // Require a valid token in a request for all API calls
    app.use('/api/v1', appGuard.requireAutheticated, apiRouter);
};