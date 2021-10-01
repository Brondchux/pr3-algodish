import { Grid, Header } from "semantic-ui-react";

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
                        <Header as="h1" size="massive" color="#ffffff">
                            {title}
						</Header>
                        <Header as="h3" size="massive" color="grey">
                            {cook_time}
						</Header>
					</Grid.Column>
				</Grid.Row>
			</div>
		</Grid>
	);
};
export default CookingBanner;
