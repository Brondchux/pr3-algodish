import { useState } from "react";
import {
	Segment,
	Form,
	Grid,
	Message,
	Icon,
	Divider,
	Header,
	Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { buttonStyles } from "../components/MainButton";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
	const [formState, setFormState] = useState({ email: "", password: "" });
	const [login, { data }] = useMutation(LOGIN);

	// update state based on form input changes
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	// submit form
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(formState);
		try {
			const { data } = await login({
				variables: { ...formState },
			});

			Auth.login(data.login.token);
		} catch (e) {
			console.error(e);
		}

		// clear form values
		setFormState({
			email: "",
			password: "",
		});
	};

	return (
		<Segment basic>
			<Grid columns={3} stackable>
				<Grid.Row>
					<Grid.Column></Grid.Column>
					<Grid.Column>
						{data ? (
							<Header as="h3" textAlign="center">
								<p>Success! You are now logged in!</p>
								<Divider horizontal></Divider>
								<Link to="/dashboard">
									<Button
										fluid
										style={buttonStyles.algoButton}
										circular
										size="huge"
									>
										<Icon name="user outline"></Icon>
										Proceed to dashboard
									</Button>
								</Link>
							</Header>
						) : (
							<Segment raised>
								<div>
									<Message
										attached
										header="Account Login"
										content="Enter your credentials to login into your account"
									/>
									<Form
										className="attached fluid segment"
										onSubmit={handleFormSubmit}
									>
										<Form.Input
											label="Email"
											placeholder="email"
											type="email"
											name="email"
											value={formState.email}
											onChange={handleChange}
										/>
										<Form.Input
											label="Password"
											placeholder="********"
											type="password"
											name="password"
											value={formState.password}
											onChange={handleChange}
										/>
										<Button
											style={buttonStyles.algoButton}
											type="submit"
											size="large"
										>
											Login
										</Button>
									</Form>
									<Message attached="bottom" warning>
										<Icon name="user" />
										New user?&nbsp;
										<Link to="/signup">Sign up</Link>
										&nbsp;instead.
									</Message>
								</div>
							</Segment>
						)}
					</Grid.Column>
					<Grid.Column></Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};
export default Login;
