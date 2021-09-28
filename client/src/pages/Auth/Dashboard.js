import {
	Segment,
	Header,
	Grid,
	Button,
	Icon,
	Divider,
} from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import { buttonStyles } from "../../components/MainButton";
import Carousel from "../../components/Carousel";
import TestDishes from "../../components/TestDishes";
import UserAccount from "../../components/UserAccount";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { FETCH_USER_BY_ID } from "../../utils/queries";

const Dashboard = () => {
	const { userId } = useParams();

	const { data } = useQuery(FETCH_USER_BY_ID, {
		variables: { id: userId },
	});

	const user = data?.userById || {};

	return (
		<Segment basic padded="very">
			{Auth.loggedIn() ? (
				<Segment raised padded="very">
					<Grid columns={2} stackable>
						<Grid.Row>
							<Grid.Column>
								<UserAccount userData={user}></UserAccount>
							</Grid.Column>
							<Grid.Column>
								<Link to={`/dashboard/${user._id}/create-dish`}>
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
					<Carousel dishList={TestDishes}></Carousel>

					<Divider horizontal></Divider>
					<Header as="h2">
						<span className="cadet-color">Your favourite dishes</span>
					</Header>
					<Carousel dishList={TestDishes}></Carousel>
				</Segment>
			) : (
				<Header textAlign="center" size="huge">
					You must be logged in!
				</Header>
			)}
		</Segment>
	);
};

export default Dashboard;
