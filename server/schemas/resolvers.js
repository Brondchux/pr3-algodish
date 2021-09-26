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
        userDishes: async (_, args, context) => {
            const {created_dishes} = await User.findById(args.id, 'created_dishes').populate('created_dishes');
            return created_dishes
        },
        
    },
};

module.exports = resolvers;