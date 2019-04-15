const userModel = require('../user/user.model');
const friendModel = require('../friend/friend.model');
const Boom = require('boom');

const queries = require('../../util/queries');

// Fetch all companions
// companions are all users in the system which are not yet marked as friends by the user
exports.getAll = async (req, res, next) => {
    try {
        const loggedInUserId = req.user.id;
        const usersToSkip = [];

        // Skip showing friends in companion list 
         const currentFriends = await friendModel.find({ userId: loggedInUserId });
         currentFriends.reduce((usersToSkip, friend) => {
             usersToSkip.push(friend.friendUserId);
             return usersToSkip;
         }, usersToSkip);
        
        // Skip showing users with admin role
        const adminUsers = await userModel.find({ role: { $eq: 'admin' } });
        adminUsers.reduce((usersToSkip, admin) => {
            usersToSkip.push(admin._id);
            return usersToSkip;
        }, usersToSkip);

        // Skip showing the logged in user itself 
        usersToSkip.push(loggedInUserId);

        // Make a query to fetch remaining users
        const users = await userModel.find({ _id: { $nin: usersToSkip } });

        // Send companion users' data in response
        const forResponse = users.map(user => {
            return {
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                username: `@${user.username}`, // Just to show @ sign next to username
                city: user.city,
                country: user.country

            };
        });
        res.json(forResponse);
    } catch (error) {
        next(error);
    }
};


exports.getOne = (req, res, next) => {
    return queries.getOne(req.docFromId)
        .then(doc => res.status(200).json(doc))
        .catch(error => next(error));
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
