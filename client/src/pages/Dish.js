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
	const { title, image, username, description, cook_time } =
		data?.dishById || {};
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
							<List divided inverted relaxed>
								<List.Item>
									<List.Content>
										<List.Header>Snickerdoodle</List.Header>
										An excellent companion
									</List.Content>
								</List.Item>
							</List>
						</Segment>
					</Message>
					<Message>
						<Message.Header>Recipe</Message.Header>
						<Segment>
							<List divided inverted relaxed>
								<List.Item>
									<List.Content>
										<List.Header>Paulo</List.Header>
										He's also a dog
									</List.Content>
								</List.Item>
							</List>
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
