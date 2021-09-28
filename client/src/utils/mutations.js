import { gql } from "@apollo/client";

//Create A User
export const CREATE_NEW_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				username
				_id
			}
		}
	}
`;

//Create A Dish

// to break this down: for a dish, we are taking in from the user a title (string) and an image (string). Then, we take in ingredients which is an array of strings. THEN, we take in instructions which is an array of objects that take in steps which itself is an array of objects, each containing time (Int) and a step (string)
//I'm not sure the notation to add the username as the dishAuthor

export const CREATE_NEW_DISH = gql`
	mutation uploadDish(
		$title: String!
		$username: String!
		$description: String!
		$image: String
		$ingredients: String!
		$recipe: String!
		$cook_time: Int
	) {
		uploadDish(
			title: $title
			username: $username
			description: $description
			image: $image
			ingredients: $ingredients
			recipe: $recipe
			cook_time: $cook_time
		) {
			_id
		}
	}
`;

//Delete A Dish by dish _id
// export const DELETE_DISH = gql``;

//Login
export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;
