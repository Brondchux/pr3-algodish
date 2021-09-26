import { Grid, Segment } from "semantic-ui-react";
import DishCard from "../DishCard";

const Carousel = () => (
	<Segment placeholder raised>
		<Grid columns={4}>
			<Grid.Row>
				<Grid.Column>
					<DishCard></DishCard>
				</Grid.Column>
				<Grid.Column>
					<DishCard></DishCard>
				</Grid.Column>
				<Grid.Column>
					<DishCard></DishCard>
				</Grid.Column>
				<Grid.Column>
					<DishCard></DishCard>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Segment>
);

export default Carousel;
