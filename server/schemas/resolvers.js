const { AuthenticationError } = require('apollo-server-express');
const { User, Dish, Instructions } = require('../models');
const { signToken } = require('../utils/auth')


/*==================

await Dish.find({}, null, {sort: { _id: -1}, limit: 5})
await Dish.find({}).sort({_id: -1}).limit(5).exec()

==================*/

const resolvers = {
    Query: {
        users: async () => {
            return await User.find()
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
        fourRandomDishes: async () => {
            return await Dish.aggregate([{ $sample: { size: 4 } }]);
        },
        lastFourDishes: async () => {
            return await Dish.find({}, null, {sort: {_id: -1 }, limit: 4});
        },
        dishesByName: async (_, args) => {
            const search = args.title
            return await Dish.find({ title: { $regex: new RegExp(search, "i")} });
        }
    },
    Mutation: {
        addUser: async (_, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });
        
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }
        
            const correctPw = await user.isCorrectPassword(password);
        
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
        
            const token = signToken(user);
        
            return { token, user };
        },

        uploadDish: async (_, { title, dishAuthor, description, image, ingredients, recipe }, context) => {
            if (context.user) {
                const newDish = new Dish({ title, dishAuthor, description, image, ingredients, recipe });

                await User.findByIdAndUpdate(context.user.id, {
                    $push: {created_dishes: newDish}
                })

                return newDish; 
            };
        }
    }

};

module.exports = resolvers;