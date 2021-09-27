import { Header, Icon, Segment } from "semantic-ui-react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import TestDishes from "../components/TestDishes";
import { FETCH_LAST_FOUR_DISHES } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Home = () => {
	const { loading, data } = useQuery(FETCH_LAST_FOUR_DISHES);
	const testDishList = () => data?.lastFourDishes || TestDishes;
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
