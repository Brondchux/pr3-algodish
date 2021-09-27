const { AuthenticationError } = require('apollo-server-express');
const { User, Dish, Instructions } = require('../models');
const { signToken } = require('../utils/auth')
const escapeStringRegexp = require('escape-string-regexp');

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
            return created_dishes;
        },
        userHistory: async (_, args) => {
            const { history_dishes } = await User.findById(args.id, 'history_dishes').populate('history_dishes');
            return history_dishes;
        },
        userFavorites: async (_, args) => {
            const { favorite_dishes } = await User.findById(args.id, 'favorite_dishes').populate('favorite_dishes');
            return favorite_dishes;
        },
        allDishes: async () => {
            return await Dish.find();
        },
        dishById: async (_, args) => {
            return await Dish.findById(args.id).populate('instructions');
        },
        fiveRandomDishes: async () => {
            return await Dish.find({}, null, {$sample: {size: 5}});
        },
        lastFiveDishes: async () => {
            return await Dish.find({}, null, {sort: {_id: -1 }, limit: 5});
        },
        dishesByName: async (_, args) => {
            const $regex = escapeStringRegexp(args.title);
            return await Dish.find({ title: { $regex } });
        }
    },
};

module.exports = resolvers;