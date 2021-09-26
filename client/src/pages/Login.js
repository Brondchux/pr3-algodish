import { Segment, Form, Grid } from "semantic-ui-react";
import MainButton from "../components/MainButton";

const Login = () => {
	return (
		<Segment basic padded="very">
			<Grid columns={3}>
				<Grid.Row>
					<Grid.Column></Grid.Column>
					<Grid.Column>
						<Segment raised>
							<Form>
								<Form.Field>
									<label>Email</label>
									<input placeholder="email" />
								</Form.Field>
								<Form.Field>
									<label>Password</label>
									<input type="password" placeholder="email" />
								</Form.Field>
								<MainButton title="Login"></MainButton>
							</Form>
						</Segment>
					</Grid.Column>
					<Grid.Column></Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};
export default Login;
