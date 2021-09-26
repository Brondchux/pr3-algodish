import { Grid, Segment } from "semantic-ui-react";
import DishCard from "../DishCard";

const Carousel = ({ dishList }) => (
	<Segment placeholder raised>
		<Grid columns={4}>
			<Grid.Row>
				{dishList.map((dish) => (
					<Grid.Column key={dish.id}>
						<DishCard dish={dish}></DishCard>
					</Grid.Column>
				))}
			</Grid.Row>
		</Grid>
	</Segment>
);

export default Carousel;
