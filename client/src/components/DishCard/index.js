import { Card, Icon, Image } from "semantic-ui-react";

const DishCard = ({ image, title, etc, ratings, shortDescription }) => (
	<Card fluid>
		<Image src={image} alt="algoDish photo" wrapped ui={false} />
		<Card.Content>
			<Card.Header>{title}</Card.Header>
			<Card.Meta>
				<Icon name="clock"></Icon>
				<span className="date">Cook time {etc}</span>
			</Card.Meta>
			<Card.Description>{shortDescription}</Card.Description>
		</Card.Content>
		<Card.Content extra>
			<span>
				(<Icon name="star" /> {ratings}) Ratings
			</span>
		</Card.Content>
	</Card>
);

export default DishCard;
