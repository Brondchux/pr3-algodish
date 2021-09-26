import { Button } from "semantic-ui-react";
const MainButton = ({ title }) => {
	const customStyles = {
		loginButton: {
			backgroundColor: "#1a1b41",
			color: "#ffffff",
		},
	};
	return (
		<Button type="submit" size="large" style={customStyles.loginButton}>
			{title}
		</Button>
	);
};
export default MainButton;
