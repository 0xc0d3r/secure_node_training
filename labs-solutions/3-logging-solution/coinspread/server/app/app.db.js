const mongoose = require('mongoose');
const appConfig = require('./app.config');

mongoose.Promise = global.Promise;

exports.connect = (config = appConfig) => {
    mongoose.connect(config.db.url, {
        useNewUrlParser: true
    });
    mongoose.set('useCreateIndex', true);
};
