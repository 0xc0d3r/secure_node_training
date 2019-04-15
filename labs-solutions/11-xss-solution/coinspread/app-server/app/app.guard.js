const authUtil = require('../api/util/auth.util');

exports.requireAutheticated = (req, res, next) => {
    authUtil.requireValidToken(req, res, next);
};
