import { gql } from "@apollo/client";

//Create A User
export const CREATE_NEW_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

//Create A Dish

// to break this down: for a dish, we are taking in from the user a title (string) and an image (string). Then, we take in ingredients which is an array of strings. THEN, we take in instructions which is an array of objects that take in steps which itself is an array of objects, each containing time (Int) and a step (string)

export const CREATE_NEW_DISH = gql`
mutation addDish(
    $title: String! 
    $image: String 
    $ingredients: [String]! 
    $instructions: [
        {$steps: [
            {
            $time: Int 
            $step: String!}
        ]
    }
]
) 
{
    addDish() {
        title: $title
        dishAuthor
        image: $image
        ingredients: $ingredients
        instructions {
            total_time
            steps {
                time: $time
                step: $step
            }
        }
    }
}
`;

//Delete A Dish
export const DELETE_DISH = gql``;

//Login
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
