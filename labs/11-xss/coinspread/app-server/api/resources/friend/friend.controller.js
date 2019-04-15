const friendModel = require('./friend.model');
const userModel = require('../user/user.model');
const queries = require('../../util/queries');
const Boom = require('boom');


exports.createOne = (req, res, next) => {
    req.body.userId = req.user.id;
    return queries.createOne(friendModel, req.body)
        .then(doc => res.status(201).json(doc))
        .catch(error => next(error));
};

exports.deleteOne = (req, res, next) => {
    return queries.deleteOne(req.docFromId)
        .then(doc => res.status(201).json(doc))
        .catch(error => next(error));
};

exports.getAll = async (req, res, next) => {
    try {
        const userId = req.user.id;
        // Get all friend Ids for current user
        const docs = await friendModel.find({ userId });
        // For each friend ID, go the users collection and get more details
        const friends = await Promise.all(docs.map(async doc => {
            const user = await userModel.findById(doc.friendUserId);
            return {
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                username: `@${user.username}`, // Just to show @ sign next to username
                city: user.city,
                country: user.country,
            };
        }));
        res.json(friends);
    } catch (error) {
        next(error);
    }
};

exports.findById = (req, res, next, id) => {
    return queries.findById(userModel, id)
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

exports.getOne = (req, res, next) => {
    return queries.getOne(req.docFromId)
        .then(doc => res.status(200).json(doc))
        .catch(error => next(error));
};