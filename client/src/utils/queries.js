import { gql } from "@apollo/client";

//Get all dishes from the database
export const FETCH_ALL_DISHES = gql`
  {
    allDishes {
      _id
      title
      dishAuthor
      image
    }
  }
`;

//Need a query dish by _id

export const FETCH_DISH_BY_ID = gql`
  {
    dishById
  }
`;

//Get all dishes by user ID (created_dishes)
export const FETCH_CREATED_DISHES = gql``;

// 6151cdb5d8d6a34560880263
