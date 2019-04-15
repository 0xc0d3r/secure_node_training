const model = require('./activity.model');
const queries = require('../../util/queries');

exports.getAll = (req, res, next) => {
    return queries.getAll(model, req.user.id)
        .then(docs => res.json(docs))
        .catch(error => next(error));
};

