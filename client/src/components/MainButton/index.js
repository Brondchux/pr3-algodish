import { Button } from "semantic-ui-react";

export const buttonStyles = {
	algoButton: {
		backgroundColor: "#1a1b41",
		color: "#ffffff",
	},
};

const MainButton = ({ title }) => {
	return (
		<Button type="submit" size="large" style={buttonStyles.algoButton}>
			{title}
		</Button>
	);
};
export default MainButton;
