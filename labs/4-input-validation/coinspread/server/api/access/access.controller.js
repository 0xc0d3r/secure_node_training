const logger = require('../../app/app.logger').logger;
const User = require('../resources/user/user.model');

exports.signin = async (req, res, next) => {
    try {
        const data = req.body;
        const user = await User.findOne({ username: data.username, password: data.password });

        if (user === null) {
            logger.info(`Failed signin attempt for username:  ${data.username}`, { reqId: req.id });
            res.status(401).send({ message: 'Invalid Credentials' });
            return;
        }

        req.user = user;
        res.status(200).json({ token: user.username });
        logger.info(`Successful signin for username = ${data.username}`, { reqId: req.id });
        return;

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
        const user = await User.create(data);
        req.user = user;
        res.status(200).json({ token: user.username });
    } catch (err) {
        next(err);
    }
};

