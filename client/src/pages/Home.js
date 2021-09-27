import { Header, Segment } from "semantic-ui-react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import spagettiImg from "../assets/images/spagetti.jpg";
import { useQuery } from "@apollo/client";

const generateRandomId = () => Math.floor(Math.random() * 99);
export const testDishList = () => [
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
	return (
		<>
			<Segment basic>
				<Banner></Banner>
			</Segment>
			<Segment basic padded="very">
				<Header as="h2">
					<span className="cadet-color">Recently added dishes</span>
				</Header>
				<Carousel dishList={testDishList()}></Carousel>

				<Header as="h2">
					<span className="cadet-color">Mostly cooked dishes</span>
				</Header>
				<Carousel dishList={testDishList()}></Carousel>
			</Segment>
		</>
	);
};

export default Home;
