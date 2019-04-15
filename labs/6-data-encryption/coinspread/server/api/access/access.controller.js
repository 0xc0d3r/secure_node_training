const bcrypt = require('bcryptjs');
const Boom = require('Boom');

const logger = require('../../app/app.logger').logger;
const User = require('../resources/user/user.model');
const appConfig = require('../../app/app.config');
const cryptoUtil = require('../util/crypto.util');
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
        const match = await bcrypt.compare(data.password, user.passwordHash);
        if (match) {
            req.user = user;
            res.status(200).json({ token: user.username });
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

        data.passwordHash = await bcrypt.hash(data.password, appConfig.saltRounds || 10);
        delete data.password;

        // Encrypt the tax id before storing it in DB
        data.tax_id = cryptoUtil.encrypt(data.tax_id);
        console.log('Decrypted TAX ID:' + cryptoUtil.decrypt(data.tax_id));

        const user = await User.create(data);
        req.user = user;
        res.status(200).json({ token: user.username });
    } catch (err) {
        next(err);
    }
};