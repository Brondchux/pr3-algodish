import mealImage from "../assets/images/salmon-bg.jpg";
import SearchBar from "../components/SearchBar";
import { Grid } from "semantic-ui-react";
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
		<div style={customStyle.wallpaper}>
			<Grid columns={1} style={customStyle.search}>
				<Grid.Row>
					<Grid.Column>
						<SearchBar></SearchBar>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default Home;
