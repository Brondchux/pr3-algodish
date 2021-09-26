import mealImage from "../../assets/images/salmon-bg.jpg";
import SearchBar from "../SearchBar";
import { Grid } from "semantic-ui-react";

const Banner = () => {
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
		<Grid columns={1}>
			<div style={customStyle.wallpaper}>
				<Grid.Row style={customStyle.search}>
					<Grid.Column>
						<SearchBar></SearchBar>
					</Grid.Column>
				</Grid.Row>
			</div>
		</Grid>
	);
};
export default Banner;
