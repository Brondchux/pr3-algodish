import { Grid, Segment, Icon, Button } from "semantic-ui-react";
import UserAccount from "../../components/UserAccount";
import CreateDishForm from "../../components/CreateDishForm";
import { buttonStyles } from "../../components/MainButton";
import { Link } from "react-router-dom";

const CreateDish = () => {
	return (
		<Segment basic padded="very">
			<Segment raised padded="very">
				<Grid columns={2} stackable>
					<Grid.Row>
						<Grid.Column>
							<UserAccount></UserAccount>
						</Grid.Column>
						<Grid.Column textAlign="right">
							<Link to="/dashboard">
								<Button size="large" style={buttonStyles.algoButton}>
									<Icon name="arrow circle left"></Icon> Back to dashboard
								</Button>
							</Link>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column>
							<CreateDishForm></CreateDishForm>
						</Grid.Column>
						<Grid.Column></Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</Segment>
	);
};

export default CreateDish;
