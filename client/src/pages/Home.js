import { Header, Icon, Segment } from "semantic-ui-react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import spagettiImg from "../assets/images/spagetti.jpg";
import { FETCH_ALL_DISHES } from "../utils/queries";
import { useQuery } from "@apollo/client";

const generateRandomId = () => Math.floor(Math.random() * 99);
export let testDishList = () => [
  {
    id: generateRandomId(),
    image: spagettiImg,
    title: `Delicious spagetti ${generateRandomId()}`,
    username: "Elle",
    cookTime: generateRandomId(),
    description: "Spagetti cooked in the Zimbabwe style!",
  },
  {
    id: generateRandomId(),
    image: spagettiImg,
    title: `Delicious spagetti ${generateRandomId()}`,
    username: "Elle",
    cookTime: generateRandomId(),
    description: "Spagetti cooked in the Zimbabwe style!",
  },
  {
    id: generateRandomId(),
    image: spagettiImg,
    title: `Delicious spagetti ${generateRandomId()}`,
    username: "Elle",
    cookTime: generateRandomId(),
    description: "Spagetti cooked in the Zimbabwe style!",
  },
  {
    id: generateRandomId(),
    image: spagettiImg,
    title: `Delicious spagetti ${generateRandomId()}`,
    username: "Elle",
    cookTime: generateRandomId(),
    description: "Spagetti cooked in the Zimbabwe style!",
  },
];

const Home = () => {
  const { loading, data } = useQuery(FETCH_ALL_DISHES);
  console.log(data);
  testDishList = () => data?.allDishes || testDishList;
  return (
    <>
      <Segment basic>
        <Banner></Banner>
      </Segment>
      <Segment basic padded="very">
        {loading ? (
          <Segment placeholder raised textAlign="center">
            <Header textAlign="center" size="large">
              <Icon name="spinner"></Icon>
            </Header>
          </Segment>
        ) : (
          <>
            <Header as="h2">
              <span className="cadet-color">Recently added dishes</span>
            </Header>
            <Carousel dishList={testDishList()}></Carousel>

            <Header as="h2">
              <span className="cadet-color">Most popular dishes</span>
            </Header>
            <Carousel dishList={testDishList()}></Carousel>
          </>
        )}
      </Segment>
    </>
  );
};

export default Home;
