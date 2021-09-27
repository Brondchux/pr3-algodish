import { gql } from "@apollo/client";

//Get all dishes from the database
export const FETCH_ALL_DISHES = gql`
{
    dishes {
        _id
        title
        dishAuthor
        image
        instruction [{
            _id
            total_time
            steps [{
                step
            }]
        }]
    }
}
`;

//Get all dishes by user ID (created_dishes)
export const FETCH_CREATED_DISHES = gql``;
