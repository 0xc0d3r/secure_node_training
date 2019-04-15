const appGuard = require('./app.guard');
const apiRouter = require('../api');
const accessRouter = require('../api/access');

exports.addRoutes = (app) => {
    app.use('/access', accessRouter);
    // Require a valid token in request for API calls
    app.use('/api/v1', appGuard.requireAutheticated, apiRouter);
};