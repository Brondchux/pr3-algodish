import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./dishCard.css";

const DishCard = ({ dish }) => {
	const { _id: dishId, image, title, username, cook_time, description } = dish;

	return (
		<Card fluid>
			<Link to={`/dish/${dishId}`}>
				<div
					className="dishImage"
					style={{ backgroundImage: `url(${image})` }}
				></div>
			</Link>
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
						<div className="add-ellipsis">
							<Icon name="list alternate outline"></Icon> {description}
						</div>
					</Card.Description>
				</Card.Meta>
			</Card.Content>
			<Card.Content extra>
				<span>
					<Icon name="clock outline" /> Cook time {cook_time} mins
				</span>
			</Card.Content>
		</Card>
	);
};

export default DishCard;
