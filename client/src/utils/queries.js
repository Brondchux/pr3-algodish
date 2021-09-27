import { gql } from "@apollo/client";

//Get all dishes from the database
export const FETCH_ALL_DISHES = gql`
  query allDishes {
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
	query dishById($id: ID!) {
		dishById(id: $id) {
			_id
			title
			dishAuthor
			image
			ingredients
			instructions {
				steps {
					step
				}
			}
		}
	}
`;

//Get all dishes by user ID (created_dishes)
export const FETCH_CREATED_DISHES = gql`
  query userDishes($id: ID!) {
    userDishes(id: $id) {
      title
      dishAuthor
      ingredients
      image
    }
  }
`;

//Get dishes by name
export const FETCH_DISH_BY_NAME = gql``;

// Dish _id for "Grilled Cheese"
// 6151cdb5d8d6a34560880263

//Get all users
export const FETCH_USERS = gql`
  query users {
    users {
      _id
      username
    }
  }
`;
