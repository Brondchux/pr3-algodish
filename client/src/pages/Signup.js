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
import { buttonStyles } from "../components/MainButton";
import { Link } from "react-router-dom";
import MainButton from "../components/MainButton";
import { useMutation } from "@apollo/client";
import { CREATE_NEW_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
	const [formState, setFormState] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [addUser, { data }] = useMutation(CREATE_NEW_USER);

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

		try {
			const { data } = await addUser({
				variables: { ...formState },
			});

			Auth.login(data.addUser.token);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<Segment basic>
			<Divider horizontal></Divider>
			<Grid columns={3} stackable>
				<Grid.Row>
					<Grid.Column></Grid.Column>
					<Grid.Column>
						{data ? (
							<Header as="h3" textAlign="center">
								<p>Success! You are now signed up!</p>
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
										header="Create Account"
										content="Fill out the form below to create your account"
									/>
									<Form
										className="attached fluid segment"
										onSubmit={handleFormSubmit}
									>
										<Form.Input
											label="Username"
											placeholder="Username"
											type="text"
											name="username"
											value={formState.username}
											onChange={handleChange}
										/>
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
											placeholder="password"
											type="password"
											name="password"
											value={formState.password}
											onChange={handleChange}
										/>
										<Form.Checkbox
											inline
											label="I agree to the terms and conditions"
										/>
										<MainButton
											color="blue"
											title="Create Account"
										></MainButton>
									</Form>
									<Message attached="bottom" warning>
										<Icon name="user" />
										Already signed up?&nbsp;
										<Link to="/login">Login here</Link>
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
export default Signup;
