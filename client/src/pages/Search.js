import { Header, Segment } from "semantic-ui-react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

const Search = () => {
	const loading = false;
	const { query: searchQuery } = useParams();
	return (
		<Segment basic padded="very">
			{loading ? (
				<Loading></Loading>
			) : (
				<Segment raised padded="very">
					<Header>{searchQuery}</Header>
				</Segment>
			)}
		</Segment>
	);
};

export default Search;
