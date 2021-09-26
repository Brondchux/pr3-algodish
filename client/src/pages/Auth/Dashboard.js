import {
	Segment,
	Header,
	Grid,
	Button,
	Icon,
	Divider,
} from "semantic-ui-react";
import { buttonStyles } from "../../components/MainButton";
import Carousel from "../../components/Carousel";
// TODO: Remove me after fetching real dishes from db
import { testDishList } from "../Home";

const Dashboard = () => {
	return (
		<Segment basic padded="very">
			<Segment raised padded="very">
				<Grid columns={2} stackable>
					<Grid.Row>
						<Grid.Column>
							<Header as="h2">
								<Icon name="user outline"></Icon>
								Welcome back, Elle!
							</Header>
						</Grid.Column>
						<Grid.Column>
							<Button fluid style={buttonStyles.algoButton} size="massive">
								<Icon name="plus"></Icon>
								Create new dish
							</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>

				<Divider horizontal></Divider>
				<Header as="h2">
					<span className="cadet-color">Dishes you created</span>
				</Header>
				<Carousel dishList={testDishList()}></Carousel>

				<Divider horizontal></Divider>
				<Header as="h2">
					<span className="cadet-color">Your favourite dishes</span>
				</Header>
				<Carousel dishList={testDishList()}></Carousel>
			</Segment>
		</Segment>
	);
};

export default Dashboard;
