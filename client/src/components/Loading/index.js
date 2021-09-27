import { Segment, Header, Icon } from "semantic-ui-react";

const Loading = () => {
	return (
		<Segment placeholder raised textAlign="center">
			<Header textAlign="center" size="large">
				<Icon name="spinner"></Icon>
			</Header>
		</Segment>
	);
};

export default Loading;
