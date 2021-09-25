const { gql } = require("apollo-server-express");

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
    dishAuthor: String
    image: String
    ingredients: Array
    instructions: [Instructions]!
  }

  type Instructions {
    _id: ID
    dish_id: [Dish]
    steps: Array
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    dish(username: String): [Dish]
    dish(_id: ID!): Dish
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
