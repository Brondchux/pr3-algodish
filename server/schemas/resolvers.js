const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth')

/*==================

await Dish.find({}, null, {sort: { _id: -1}, limit: 5})
await Dish.find({}).sort({_id: -1}).limit(5).exec()

==================*/

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('created_dishes', 'favorite_dishes', 'history_dishes')
        },
    },
};

module.exports = resolvers;