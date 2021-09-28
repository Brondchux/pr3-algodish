import { Header, Segment } from "semantic-ui-react";
import { FETCH_DISH_BY_NAME } from "../utils/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Loading from "../components/Loading";

const Search = () => {
	const { query: dishTitle } = useParams();
	const { loading, data } = useQuery(FETCH_DISH_BY_NAME, {
		variables: { title: dishTitle },
	});
	const results = data?.dishesByName || [];
	console.log("Search results: ", results);
	return (
		<Segment basic padded="very">
			{loading ? (
				<Loading></Loading>
			) : (
				<Segment raised padded="very">
					<Header>{dishTitle}</Header>
				</Segment>
			)}
		</Segment>
	);
};

export default Search;
