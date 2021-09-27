import { useState } from "react";
import { Segment, Form, Grid, Message, Icon, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import MainButton from "../components/MainButton";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN);

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
                  header="Account Login"
                  content="Enter your credentials to login into your account"
                />
                <Form className="attached fluid segment">
                  <Form.Input label="Email" placeholder="email" type="email" />
                  <Form.Input
                    label="Password"
                    placeholder="password"
                    type="password"
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
    </Segment>
  );
};
export default Login;
