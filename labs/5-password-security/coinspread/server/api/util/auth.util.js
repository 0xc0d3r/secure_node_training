const User = require('../resources/user/user.model');
const logger = require('../../app/app.logger');

exports.requireValidToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        //Verify if token is in format Bearer <username>
        if (!authHeader && authHeader.indexOf('Bearer') !== 0) {
            next(new Error('Invalid Authorization Header'));
        }
        const username = authHeader.split(' ')[1];
        const user = await User.findOne({ username });

        if (user === null) {
            logger.info(`Invalid user name ${username}`, { reqId: req.id });
            res.status(401).send({ message: 'Invalid Credentials' });
            return;
        }
        req.user = user;
        next();

    } catch (err) {
        next(err);
    }
};
