const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    created_dishes: [Dish]
    favorite_dishes: [Dish]
    history_dishes: [Dish]
  }

  type Dish {
    _id: ID
    title: String
    dishAuthor: String
    image: String
    ingredients: [String]
    instructions: Instructions!
  }

  type Instructions {
    _id: ID
    total_time: Number
    steps: [Step]
  }

  type Step {
    _id: ID
    time: Number
    step: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    userDishes(username: String!): [Dish]
    userHistory(username: String!): [Dish]
    userFavorites(username: String!): [Dish]
    allDishes: [Dish]
    fiveRandomDished: [Dish]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    #add a dish
    #add a set of instructions
    #delete a dish
    #save a favorite dish
  }
`;

module.exports = typeDefs;
