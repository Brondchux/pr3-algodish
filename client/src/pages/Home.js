import { Header, Segment } from "semantic-ui-react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";

const Home = () => {
	return (
		<>
			<Segment basic>
				<Banner></Banner>
			</Segment>
			<Segment basic padded="very">
				<Header as="h2">
					<span className="cadet-color">Recently added dishes</span>
				</Header>
				<Carousel></Carousel>

				<Header as="h2">
					<span className="cadet-color">Mostly cooked dishes</span>
				</Header>
				<Carousel></Carousel>
			</Segment>
		</>
	);
};

export default Home;
