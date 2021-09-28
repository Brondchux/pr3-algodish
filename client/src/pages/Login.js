import { useState } from "react";
import { Segment, Form, Grid, Message, Icon, Divider } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import MainButton from "../components/MainButton";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    // console.log("Name: ", name, " Value: ", value);
  };
  let showDashboard = false;
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(formState);

      showDashboard = auth.login(data.login.token) ? true : false;
      console.log(showDashboard);
      console.log(data.login.token);
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
      <Divider horizontal></Divider>
      {showDashboard ? (
        <Redirect to="/dashboard"></Redirect>
      ) : (
        <>
          <Grid columns={3} stackable>
            <Grid.Row>
              <Grid.Column></Grid.Column>
              <Grid.Column>
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
                        placeholder="password"
                        type="password"
                        name="password"
                        value={formState.password}
                        onChange={handleChange}
                      />
                      <MainButton color="blue" title="Login"></MainButton>
                    </Form>
                    <Message attached="bottom" warning>
                      <Icon name="user" />
                      New user?&nbsp;
                      <Link to="/signup">Sign up</Link>
                      &nbsp;instead.
                    </Message>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>
          </Grid>
        </>
      )}
    </Segment>
  );
};
export default Login;
