import { Segment, Header, Grid, Button, Icon } from "semantic-ui-react";
import { buttonStyles } from "../../components/MainButton";

const Dashboard = () => {
	return (
		<Segment basic padded="very">
			<Segment raised padded="very">
				<Grid columns={2} stackable>
					<Grid.Row>
						<Grid.Column>
							<Header as="h2">Welcome back, Elle!</Header>
						</Grid.Column>
						<Grid.Column>
							<Button fluid style={buttonStyles.algoButton} size="massive">
								<Icon name="plus"></Icon>
								Create a dish
							</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</Segment>
	);
};

export default Dashboard;
