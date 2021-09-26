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
            return await User.find()
            // , 'favorite_dishes') 
            // , 'favorite_dishes', 'history_dishes')
            // .populate({
            //     path: 'created_dishes',
            //     populate: 'instructions',
            // },
            // {
            //     path: 'favorite_dishes',
            //     populate: 'instructions',
            // },
            // {
            //     path: 'favorite_dishes',
            //     populate: 'instructions',
            // });
        },
        userDishes: async (_, args) => {
            const { created_dishes } = await User.findById(args.id, 'created_dishes').populate('created_dishes');
            return created_dishes
        },
        userHistory: async (_, args) => {d
            const { history_dishes } = await User.findById(args.id, 'history_dishes').populate('history_dishes');
            return history_dishes
        },
        userFavorites: async (_, args) => {d
            const { favorite_dishes } = await User.findById(args.id, 'favorite_dishes').populate('favorite_dishes');
            return favorite_dishes 
        },
    },
};

module.exports = resolvers;