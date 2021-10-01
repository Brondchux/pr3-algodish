import { Header, Icon, Segment, Message, List } from "semantic-ui-react";
import { FETCH_WHOLE_DISH_BY_ID } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import Loading from "../components/Loading";

const Dish = () => {
	const dishStyles = {
		dishBackground: {
			width: "100%",
			height: "200px",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			borderRadius: "10px",
		},
	};

	const { id: dishId } = useParams();
	const { loading, data } = useQuery(FETCH_WHOLE_DISH_BY_ID, {
		variables: { id: dishId },
	});
	console.log(data?.dishById)

	const {
		title,
		image,
		username,
		description,
		ingredients,
		instructions,
		recipe,
		cook_time,
	} = data?.dishById || {};

	const ingredientsList = ingredients ? ingredients.split(",") : [];
	const recipeList = recipe ? recipe.split(".") : [];

	console.log(instructions)

	return (
		<Segment basic padded="very">
			{loading ? (
				<Loading></Loading>
			) : (
				<Segment raised padded="very">
					<div
						style={{
							backgroundImage: `url(${image})`,
							...dishStyles.dishBackground,
						}}
					></div>
					<Header as="h3" size="huge">
						<Icon name="utensils"></Icon> {title}
					</Header>
					<Message>
						<Message.Header>
							<Icon name="user outline"></Icon> {username} says:
						</Message.Header>
						<p>{description}</p>
					</Message>
					<Message>
						<Message.Header>Ingredients</Message.Header>
						<Segment>
							{ingredientsList.map((ingredient, index) => (
								<List key={index} divided inverted relaxed>
									<List.Item>
										<List.Content>
											{index + 1}. {ingredient}
										</List.Content>
									</List.Item>
								</List>
							))}
						</Segment>
					</Message>
					<Message>
						<Message.Header>Recipe</Message.Header>
						<Segment>
							{instructions
								.map((step, index) => (
									<List key={index} divided inverted relaxed>
										<List.Item>
											<List.Content >
												<Segment left floated>{index + 1}. {step.step}</Segment>
												<Segment right floated>{step.time} min.</Segment>
											</List.Content>
										</List.Item>
									</List>
								))}
						</Segment>
					</Message>
					<Message>
						<Message.Header>Cook Time</Message.Header>
						<Segment>
							<List divided inverted relaxed>
								<List.Item>
									<List.Content>
										Estimated ready time is {cook_time} minutes!
									</List.Content>
								</List.Item>
							</List>
						</Segment>
					</Message>
				</Segment>
			)}
		</Segment>
	);
};

export default Dish;
