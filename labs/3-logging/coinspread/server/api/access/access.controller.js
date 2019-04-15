const logHandler = require('../../app/app.logger');
const getRequestMeta = logHandler.getRequestMeta;
const logger = logHandler.logger;
const User = require('../resources/user/user.model');

exports.signin = async (req, res, next) => {
    try {
        const data = req.body;
        const user = await User.findOne({ username: data.username, password: data.password });

        if (user === null) {
            // TODO LAB TASK 5: Add info level comment when a login attempt fails
            // Include the request metadata object (fetched using getRequestMeta(req)) in the log 
            // https://github.com/winstonjs/winston/tree/2.x#logging-with-metadata
            console.log(`Failed signin attempt for username:  ${data.username}`, getRequestMeta(req));

            res.status(401).send({ message: 'Invalid Credentials' });
            return;
        }

        req.user = user;
        res.status(200).json({ token: user.username });
        // TODO LAB TASK 6: Add info level comment when a login attempt is successful
        // Include the request metadata object (fetched using logger.getRequestMeta(req)) in the log 
        console.log(`Successful signin for username = ${data.username}`, getRequestMeta(req));
        return;

    } catch (err) {
        next(err);
    }
};

exports.signup = async (req, res, next) => {
    const data = req.body;
    try {
        const existingUser = await User.findOne({ username: data.username });
        if (existingUser) {
            logger.info(`Failed to sign up with an exiting username = ${data.username}`, getRequestMeta(req));
            res.status(401).send({ message: 'User already exists...' });
            return;
        }
        const user = await User.create(data);
        logger.info(`Successful created a new username = ${data.username}`, getRequestMeta(req));

        req.user = user;
        res.status(200).json({ token: user.username });
    } catch (err) {
        next(err);
    }
};

