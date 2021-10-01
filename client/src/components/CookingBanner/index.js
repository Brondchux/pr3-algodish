import { Grid, Header } from "semantic-ui-react";
import "./cookingBanner.css"

const CookingBanner = ({imageUrl, title, cook_time}) => {
    const customStyle = {
		wallpaper: {
			width: "100%",
			minHeight: "300px",
			backgroundImage: `url(${imageUrl})`,
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
                        <h1 className="title">
                            {title}
						</h1>
                        <h2 className="cookTime">Estimated Cook Time: {cook_time} mins.</h2>
					</Grid.Column>
				</Grid.Row>
			</div>
		</Grid>
	);
};
export default CookingBanner;
