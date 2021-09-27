import { Header, Icon, Segment, Message, List } from "semantic-ui-react";
import image from "../assets/images/spagetti.jpg";

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
	return (
		<Segment basic padded="very">
			<Segment raised padded="very">
				<div
					style={{
						backgroundImage: `url(${image})`,
						...dishStyles.dishBackground,
					}}
				></div>
				<Header as="h3" size="huge">
					<Icon name="utensils"></Icon> Dish Title
				</Header>
				<Message>
					<Message.Header>About dish</Message.Header>
					<p>
						We updated our privacy policy here to better service our customers.
						We recommend reviewing the changes.
					</p>
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
							<List.Item>
								<List.Content>
									<List.Header>Poodle</List.Header>A poodle, its pretty basic
								</List.Content>
							</List.Item>
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
					<Message.Header>Recipe</Message.Header>
					<Segment>
						<List divided inverted relaxed>
							<List.Item>
								<List.Content>
									<List.Header>Snickerdoodle</List.Header>
									An excellent companion
								</List.Content>
							</List.Item>
							<List.Item>
								<List.Content>
									<List.Header>Poodle</List.Header>A poodle, its pretty basic
								</List.Content>
							</List.Item>
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
					<Message.Header>Est. Cook Time</Message.Header>
					<Segment>
						<List divided inverted relaxed>
							<List.Item>
								<List.Content>An excellent companion</List.Content>
							</List.Item>
						</List>
					</Segment>
				</Message>
			</Segment>
		</Segment>
	);
};

export default Dish;
