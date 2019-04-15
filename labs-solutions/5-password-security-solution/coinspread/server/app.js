const express = require('express');
const middlewareHandler = require('./app/app.middleware');
const routeHandler = require('./app/app.routes');
const db = require('./app/app.db');
const logger = require('./app/app.logger').logger;

const app = express();

logger.log('info', 'Created Express App');

// Hook middleware that should execute before routes
logger.log('info', 'Including middleware before routes...');
middlewareHandler.addBeforeRoutes(app);

// Connect to DB
db.connect();

// Add routes
logger.log('info', 'Adding Routes');
routeHandler.addRoutes(app);

// Hook middlware that should execute after routes
logger.log('info', 'Including middleware after routes...');
middlewareHandler.addAfterRoutes(app);

module.exports = app;
