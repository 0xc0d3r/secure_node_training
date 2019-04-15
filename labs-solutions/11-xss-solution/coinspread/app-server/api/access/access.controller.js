const bcrypt = require('bcryptjs');
const Boom = require('Boom');

const logger = require('../../app/app.logger').logger;
const User = require('../resources/user/user.model');
const appConfig = require('../../app/app.config');
const authUtil = require('../util/auth.util');

exports.signin = async (req, res, next) => {
    try {
        const data = req.body;
        const user = await User.findOne({ username: data.username });

        if (user === null) {
            logger.info(`Invalid user name ${data.username}`, { reqId: req.id });
            res.send(Boom.unauthorized('Invalid Credentials'));
            return;
        }
        // Verify user supplied password against the valid password hash in DB
        // bcrypt.compare() does this matching asynchronously with a constant time comparison 
        const match = await bcrypt.compare(data.password, user.passwordHash);
        if (match) {
            req.user = user;
            const payload = { id: user.id };
            if (user.role === 'admin') {
                payload.scope = 'admin';
            }
            const token = authUtil.signToken(payload);
            res.status(200).json({ token });
            logger.info(`Successful signin for username = ${data.username}`, { userid: user.id, reqId: req.id });
            return;
        }

        logger.info(`Failed signin attempt for username = ${data.username}`, { reqId: req.id });
        res.status(401).send({ message: 'Invalid Credentials' });
    } catch (err) {
        next(err);
    }
};

exports.signup = async (req, res, next) => {
    console.log('inside controller.signup');
    const data = req.body;
    try {
        const existingUser = await User.findOne({ username: data.username });
        if (existingUser) {
            res.status(401).send({ message: 'User already exists...' });
            return;
        }

        // Create a hash from the password using async hash method and an auto-generate a salt. 
        // The second saltRound param specifies the cost or desired slowness of the hashing process
        data.passwordHash = await bcrypt.hash(data.password, appConfig.saltRounds || 10);

        delete data.password;
        const user = await User.create(data);
        req.user = user;
        const payload = { id: user.id };
        if (user.role === 'admin') {
            payload.scope = 'admin';
        }
        const token = authUtil.signToken(payload);
        res.status(200).json({ token });
    } catch (err) {
        next(err);
    }
};