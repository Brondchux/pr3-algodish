import { gql } from "@apollo/client";

//Get all dishes from the database
export const FETCH_ALL_DISHES = gql`
  query allDishes {
    allDishes {
      _id
      title
      dishAuthor
      image
      description
      cookTime
    }
  }
`;

//Need a query dish by _id
//Why is this suddenly not working
export const FETCH_DISH_BY_ID = gql`
  query dishById($id: ID!) {
    dishById(id: $id) {
      _id
      title
      dishAuthor
      image
      description
      cookTime
    }
  }
`;

//Get One Master Dish
export const FETCH_WHOLE_DISH_BY_ID = gql`
  query dishById($id: ID!) {
    dishById(id: $id) {
      title
      dishAuthor
      image
      description
      cookTime
      ingredients
      recipe
    }
  }
`;

//Get all dishes by user ID (created_dishes)
export const FETCH_CREATED_DISHES = gql`
  query userDishes($id: ID!) {
    userDishes(id: $id) {
      title
      dishAuthor
      image
      description
      cookTime
      ingredients
    }
  }
`;

//five random dishes
export const FETCH_FOUR_RANDOM_DISHES = gql`
  query fourRandomDishes {
    fourRandomDishes {
      title
      dishAuthor
      image
      description
      cookTime
    }
  }
`;

//last five dishes
export const FETCH_LAST_FOUR_DISHES = gql`
  query lastFiveDishes {
    lastFiveDishes {
      title
      dishAuthor
      image
      description
      cookTime
    }
  }
`;

//Get dishes by name
export const FETCH_DISH_BY_NAME = gql`
  query dishesByName($title: String!) {
    dishesByName(title: $title) {
      title
      dishAuthor
      image
      description
      cookTime
    }
  }
`;

//Get all users
export const FETCH_USERS = gql`
  query users {
    users {
      _id
      username
    }
  }
`;
