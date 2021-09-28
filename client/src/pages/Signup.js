import { Segment, Form, Grid, Message, Icon, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import MainButton from "../components/MainButton";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_NEW_USER } from "../utils/mutations";
import auth from "../utils/auth";

const Signup = (props) => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [login, { error, data }] = useMutation(CREATE_NEW_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    // console.log("Name: ", name, " Value: ", value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      console.log(formState);

      auth.login(data.login.token);
      console.log(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <Segment basic>
      <Divider horizontal></Divider>
      <Grid columns={3} stackable>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column>
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
                  <MainButton color="blue" title="Create Account"></MainButton>
                </Form>
                <Message attached="bottom" warning>
                  <Icon name="user" />
                  Already signed up?&nbsp;
                  <Link to="/login">Login here</Link>
                  &nbsp;instead.
                </Message>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
export default Signup;
