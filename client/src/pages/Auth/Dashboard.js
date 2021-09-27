import {
	Segment,
	Header,
	Grid,
	Button,
	Icon,
	Divider,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { buttonStyles } from "../../components/MainButton";
import Carousel from "../../components/Carousel";
// TODO: Remove me after fetching real dishes from db
import { testDishList } from "../Home";
import UserAccount from "../../components/UserAccount";

const Dashboard = () => {
	return (
		<Segment basic padded="very">
			<Segment raised padded="very">
				<Grid columns={2} stackable>
					<Grid.Row>
						<Grid.Column>
							<UserAccount></UserAccount>
						</Grid.Column>
						<Grid.Column>
							<Link to="create-dish">
								<Button
									fluid
									style={buttonStyles.algoButton}
									circular
									size="huge"
								>
									<Icon name="plus"></Icon>
									Create new dish
								</Button>
							</Link>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<Divider horizontal></Divider>

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
