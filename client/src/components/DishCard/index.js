import { Card, Icon } from "semantic-ui-react";
import "./dishCard.css";

const DishCard = ({ dish }) => {
	const { image, title, username, cookTime, description } = dish;

	return (
		<Card fluid>
			<div
				className="dishImage"
				style={{ backgroundImage: `url(${image})` }}
			></div>
			<Card.Content>
				<Card.Header>{title}</Card.Header>
				<br />
				<Card.Meta>
					<Icon name="user"></Icon>
					<span className="date">{username}</span>
				</Card.Meta>
				<Card.Description>{description}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<span>
					<Icon name="clock" /> Cook time {cookTime} mins
				</span>
			</Card.Content>
		</Card>
	);
};

export default DishCard;
