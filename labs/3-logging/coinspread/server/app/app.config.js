const path = require('path');

module.exports = {
    port: 3000,
    secrets: {},
    hashing: {
        saltRounds: 10
    },
    db: {
        // local mongo instance url (mongod --dbpath=mongodb/)
        url: 'mongodb://localhost/coinspread'
        //mlab url
        //url: 'mongodb://admin1:admin1@ds111963.mlab.com:11963/coinspread'
    },
    log: {
        mongo_db_url: 'mongodb://localhost/coinspread_logs',
        // mlab url 
        //mongo_db_url: 'mongodb://admin1:admin1@ds059205.mlab.com:59205/coinspread_logs',
        file_url: path.join(__dirname, '../logs/application.log')
    }
};