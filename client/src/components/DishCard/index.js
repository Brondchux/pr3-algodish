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
					<Icon name="user outline"></Icon>
					<span className="date">{username}</span>
				</Card.Meta>
				<br />
				<Card.Meta>
					<Card.Description>
						<Icon name="list alternate outline"></Icon> {description}
					</Card.Description>
				</Card.Meta>
			</Card.Content>
			<Card.Content extra>
				<span>
					<Icon name="clock outline" /> Cook time {cookTime} mins
				</span>
			</Card.Content>
		</Card>
	);
};

export default DishCard;
