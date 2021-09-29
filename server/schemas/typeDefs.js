const { gql } = require("apollo-server-express");
// Comment2
const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
		password: String
		created_dishes: [Dish]
		favorite_dishes: [Dish]
		history_dishes: [Dish]
	}

	type Dish {
		_id: ID
		title: String
		username: String
		description: String
		image: String
		ingredients: String
		recipe: String
		instructions: [Step]!
		cook_time: Int
	}

	type Step {
		_id: ID
		time: Int
		step: String
	}

	type Auth {
		token: ID
		user: User
	}

	type Query {
		users: [User]
		user(username: String!): User
		userById(id: ID!): User
		userDishes(id: ID!): [Dish]
		userHistory(id: ID!): [Dish]
		userFavorites(id: ID!): [Dish]
		allDishes: [Dish]
		dishesByName(title: String!): [Dish]
		dishById(id: ID!): Dish
		fourRandomDishes: [Dish]
		lastFourDishes: [Dish]
		usernameCreatedDishes(username: String!): [Dish]
		me: User
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		uploadDish(
			title: String!
			username: String!
			description: String!
			image: String
			ingredients: String!
			cook_time: Int
			userId : ID!
		): Dish
		addInstructionsToDish(step: String!, time: Int, dishId: ID!): Dish	
		
	}
`;

module.exports = typeDefs;

// addDishToFavorites()
// addDishToHistory
// removeDishFromFavorites
// deleteDish
// #add a set of instructions
// #delete a dish
// #save a favorite dish
