import { Segment } from "semantic-ui-react";
import Banner from "../components/Banner";
import RecentDishes from "../components/RecentDishes";
import PopularDishes from "../components/PopularDishes";

const Home = () => {
	return (
		<>
			<Segment basic>
				<Banner></Banner>
			</Segment>
			<RecentDishes></RecentDishes>
			<PopularDishes></PopularDishes>
		</>
	);
};

export default Home;
