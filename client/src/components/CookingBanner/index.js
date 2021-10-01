import { Grid } from "semantic-ui-react";

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
						{title}
                        {cook_time}
					</Grid.Column>
				</Grid.Row>
			</div>
		</Grid>
	);
};
export default CookingBanner;
