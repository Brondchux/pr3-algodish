import mealImage from "../assets/images/salmon-bg.jpg";
import SearchBar from "../components/SearchBar";
import { Grid, Header, Segment } from "semantic-ui-react";
import Carousel from "../components/Carousel";

const Home = () => {
	const customStyle = {
		wallpaper: {
			width: "100%",
			minHeight: "300px",
			backgroundImage: `url(${mealImage})`,
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		search: {
			minWidth: "60%",
		},
	};
	return (
		<>
			<Grid columns={1}>
				<div style={customStyle.wallpaper}>
					<Grid.Row style={customStyle.search}>
						<Grid.Column>
							<SearchBar></SearchBar>
						</Grid.Column>
					</Grid.Row>
				</div>
			</Grid>
			<Segment padded="very">
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
