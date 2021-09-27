import { gql } from "@apollo/client";

//Get all dishes from the database
export const FETCH_ALL_DISHES = gql`
<<<<<<< HEAD
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
=======
	query allDishes {
		allDishes {
			_id
			title
			dishAuthor
			image
			description
		}
	}
>>>>>>> 7c49279893066fe364129da00b035432339621ae
`;

//Why is this suddenly not working
export const FETCH_DISH_BY_ID = gql`
<<<<<<< HEAD
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
=======
	query dishById($id: ID!) {
		dishById(id: $id) {
			_id
			title
			dishAuthor
			image
			description
		}
	}
>>>>>>> 7c49279893066fe364129da00b035432339621ae
`;

//Get One Master Dish
export const FETCH_WHOLE_DISH_BY_ID = gql`
<<<<<<< HEAD
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
=======
	query dishById($id: ID!) {
		dishById(id: $id) {
			title
			dishAuthor
			image
			description
			ingredients
			recipe
		}
	}
>>>>>>> 7c49279893066fe364129da00b035432339621ae
`;

//Get all dishes by user ID (created_dishes)
export const FETCH_CREATED_DISHES = gql`
<<<<<<< HEAD
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
=======
	query userDishes($id: ID!) {
		userDishes(id: $id) {
			title
			dishAuthor
			ingredients
			image
			description
		}
	}
>>>>>>> 7c49279893066fe364129da00b035432339621ae
`;

//five random dishes
export const FETCH_FOUR_RANDOM_DISHES = gql`
<<<<<<< HEAD
  query fourRandomDishes {
    fourRandomDishes {
      title
      dishAuthor
      image
      description
      cookTime
    }
  }
=======
	query fourRandomDishes {
		fourRandomDishes {
			title
			dishAuthor
			image
			description
		}
	}
>>>>>>> 7c49279893066fe364129da00b035432339621ae
`;

//last five dishes
export const FETCH_LAST_FOUR_DISHES = gql`
<<<<<<< HEAD
  query lastFiveDishes {
    lastFiveDishes {
      title
      dishAuthor
      image
      description
      cookTime
    }
  }
=======
	query lastFiveDishes {
		lastFiveDishes {
			title
			dishAuthor
			image
			description
		}
	}
>>>>>>> 7c49279893066fe364129da00b035432339621ae
`;

//Get dishes by name
export const FETCH_DISH_BY_NAME = gql`
<<<<<<< HEAD
  query dishesByName($title: String!) {
    dishesByName(title: $title) {
      title
      dishAuthor
      image
      description
      cookTime
    }
  }
=======
	query dishesByName($title: String!) {
		dishesByName(title: $title) {
			title
			dishAuthor
			image
			description
		}
	}
>>>>>>> 7c49279893066fe364129da00b035432339621ae
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
