import { Segment, Form, Grid, Message, Icon, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import MainButton from "../components/MainButton";

const Signup = () => {
  return (
    <Segment basic padded="very">
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
                <Form className="attached fluid segment">
                  <Form.Input
                    label="Username"
                    placeholder="Username"
                    type="text"
                  />
                  <Form.Input label="Email" placeholder="email" type="email" />
                  <Form.Input
                    label="Password"
                    placeholder="password"
                    type="password"
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
