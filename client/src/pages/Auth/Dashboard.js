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
import auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { FETCH_USER_BY_ID } from "../../utils/queries";

const Dashboard = () => {
  const { id: userId } = useParams();

  const { loading, data } = useQuery(FETCH_USER_BY_ID, {
    variables: { id: userId },
  });

  const user = data?.userById || {};
  // redirect to personal profile page if username is yours
  console.log("Auth.loggedIn()", auth.loggedIn());
  console.log("User: ", user);

  if (auth.loggedIn()) {
    console.log("Logged in");
    // return <Redirect to="/dashboard" />;
  } else {
    console.log("Not logged in");
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this. Use the navigation links above to
  //       sign up or log in!
  //     </h4>
  //   );
  // }

  return (
    <Segment basic padded="very">
      {user ? (
        <Header textAlign="center" size="huge">
          You must be logged in!
        </Header>
      ) : (
        <Segment raised padded="very">
          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column>
                <UserAccount></UserAccount>
              </Grid.Column>
              <Grid.Column>
                <Link to="create-dish">
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
      )}
    </Segment>
  );
};

export default Dashboard;
