import { Header, Icon } from "semantic-ui-react";

const UserAccount = ({ userData }) => {
	const { username } = userData;
	return (
		<Header as="h2">
			<Icon name="user outline"></Icon>
			Welcome back, {username}!
		</Header>
	);
};

export default UserAccount;
