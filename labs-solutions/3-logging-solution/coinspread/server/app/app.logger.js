var expressWinston = require('express-winston');
var winston = require('winston'); // for transports.Console
const moment = require('moment');
require('winston-mongodb');

const appConfig = require('../app/app.config');

// define the custom settings for each transport (file, console)
const options = {
    console: {
        level: 'error',
        handleExceptions: true,
        json: true
    },
    file: {
        level: 'info',
        filename: appConfig.log.file_url,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
        timestamp: function () {
            return moment().format('YYYY-MM-DD HH:mm:ss.SSSS');
        },
    },
    db_info: {
        name: 'info',
        level: 'info',
        db: appConfig.log.mongo_db_url,
        json: true
    },
    db_error: {
        name: 'error',
        level: 'error',
        db: appConfig.log.mongo_db_url,
        collection: 'errors',
        json: true
    },
    exceptions: { // Logs uncaught exceptions in the code
        db: appConfig.log.mongo_db_url,
        collection: 'exceptions',
    }
};

exports.logger = new (winston.Logger)({
    transports: [
        new winston.transports.Console(options.console),
        new winston.transports.File(options.file),
        new winston.transports.MongoDB(options.db_info),
        new winston.transports.MongoDB(options.db_error)
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

exports.getRequestMeta = (req, res) => {
    //Additional Dynamic MetaData to log
    return {
        app: process.env.APP_NAME,
        host: req.headers.host,
        reqId: req.id //Add request.id for cross-application request correlation
    };
};

// Configure express-winston logger to log HTTP Requests 
exports.addRequestLogger = (app) => {
    app.use(expressWinston.logger({
        winstonInstance: this.logger,
        // LAB TASK 2: Include request matadata (fetched using this.getRequestMeta()) in the log entry
        // Refer to `dynamicMeta` express-winston options here: https://www.npmjs.com/package/express-winston#options
        dynamicMeta: this.getRequestMeta,
        requestWhitelist: ['url', 'originalUrl', 'method', 'body'],
        // LAB TASK 3: Blacklist logging password if sent in request body
        // Refer to `bodyBlacklist` express-winston options here: https://www.npmjs.com/package/express-winston#options
        bodyBlacklist: ['password'],
        meta: true,
        // LAB TASK 4: Prevent logging Non-Printable and line feed characters. You can use the requestFilter() function in this file 
        // Refer to the `requestFilter` express-winston option here: https://www.npmjs.com/package/express-winston#options 
        requestFilter: requestFilter
    }));
};

