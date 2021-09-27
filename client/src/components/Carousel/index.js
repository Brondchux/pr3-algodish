import { Grid, Segment } from "semantic-ui-react";
import DishCard from "../DishCard";

const Carousel = ({ dishList }) => (
	<Segment placeholder raised>
		<Grid doubling stackable columns={4}>
			<Grid.Row>
				{dishList.map((dish, index) => (
					<Grid.Column key={index}>
						<DishCard dish={dish}></DishCard>
					</Grid.Column>
				))}
			</Grid.Row>
		</Grid>
	</Segment>
);

export default Carousel;
