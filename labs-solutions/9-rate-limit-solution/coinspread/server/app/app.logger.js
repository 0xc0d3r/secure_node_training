var expressWinston = require('express-winston');
var winston = require('winston'); // for transports.Console
const moment = require('moment');
require('winston-mongodb');

const appConfig = require('../app/app.config');

// define the custom settings for each transport (file, console)
const options = {
    file: {
        level: 'info',
        filename: appConfig.log.file_url,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
        timestamp: function () {
            return moment().format('YYYY-MM-DD HH:mm:ss.SSSS');
        },
    },
    console: {
        level: 'error',
        handleExceptions: true,
        json: true
    },
    db_info: {
        name: 'info',
        level: 'info',
        db: appConfig.log.mongo_db_url,
        handleExceptions: false,
        json: true
    },
    db_error: {
        name: 'error',
        level: 'error',
        db: appConfig.log.mongo_db_url,
        collection: 'errors',
        handleExceptions: false,
        json: true
    },
    exceptions: { // Logs uncaught exceptions in the code
        db: appConfig.log.mongo_db_url,
        collection: 'exceptions',
        handleExceptions: true
    }
};

exports.logger = new (winston.Logger)({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console),
        new winston.transports.MongoDB(options.db_info),
        new winston.transports.MongoDB(options.db_error),
    ],
    exceptionHandlers: [
        new winston.transports.MongoDB(options.exceptions)
    ]
});

const sanitizeForLog = (str) => {
    // Remove Non-Printable and line feed characters
    // Also refer to a comprehensive list of non-printable chartacters:
    // https://www.regular-expressions.info/nonprint.html
    return str.replace(/[^ -~]+|\\n|\\r|%0a|%0A|%0d|%0D|/g, '');
};

const requestFilter = (req, propName) => {
    if (typeof req[propName] === 'string') {
        return sanitizeForLog(req[propName]);
    } else {
        return JSON.parse(sanitizeForLog(JSON.stringify(req[propName])));
    }
};

const dynamicMeta = (req, res) => {
    //Additional Dynamic MetaData to log
    return {
        app: process.env.APP_NAME,
        host: req.headers.host,
        reqId: req.id //Add request.id for cross-application request corelation
    };
};

// express-winston logger to log HTTP Requests 
exports.addRequestLogger = (app) => {
    app.use(expressWinston.logger({
        winstonInstance: this.logger,
        requestWhitelist: ['url', 'originalUrl', 'method', 'body'],
        bodyBlacklist: ['password'],
        meta: true,
        dynamicMeta: dynamicMeta,
        requestFilter: requestFilter
    }));
};

