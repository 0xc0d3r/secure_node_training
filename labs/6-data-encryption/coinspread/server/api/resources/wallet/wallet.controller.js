const model = require('./wallet.model');
const queries = require('../../util/queries');
const uuidv4 = require('uuid/v4');
const Boom = require('boom');


exports.createOne = (req, res, next) => {
    // Add unique Address to wallet
    req.body.userId = req.user.id;
    req.body.address = uuidv4();
    return queries.createOne(model, req.body)
        .then(doc => res.status(201).json(doc))
        .catch(error => next(error));
};

exports.updateOne = (req, res, next) => {
    const docToUpdate = req.docFromId;
    const update = req.body;

    return queries.updateOne(docToUpdate, update)
        .then(doc => res.status(201).json(doc))
        .catch(error => next(error));
};

exports.deleteOne = (req, res, next) => {
    return queries.deleteOne(req.docFromId)
        .then(doc => res.status(201).json(doc))
        .catch(error => next(error));
};
exports.getAll = (req, res, next) => {
    return queries.getAll(model, req.user.id)
        .then(docs => res.json(docs))
        .catch(error => next(error));
};

exports.getOne = (req, res, next) => {
    return queries.getOne(req.docFromId)
        .then(doc => res.status(200).json(doc))
        .catch(error => next(error));
};



exports.findById = (req, res, next, id) => {
    return queries.findById(model, id)
        .then(doc => {
            if (!doc) {
                next(Boom.notFound());
            } else {
                req.docFromId = doc;
                next();
            }
        })
        .catch(error => {
            next(error);
        });
};
