import { Grid, Icon, Message, Segment } from "semantic-ui-react";
import { FETCH_DISH_BY_NAME } from "../utils/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Loading from "../components/Loading";
import DishCard from "../components/DishCard";

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
					<Message>
						<Message.Header>
							<Icon name="search"></Icon>
							{results.length} results found for: {dishTitle}
						</Message.Header>
					</Message>
					<Grid doubling stackable columns={results.length}>
						<Grid.Row>
							{results.map((dish, index) => (
								<Grid.Column key={index}>
									<DishCard dish={dish}></DishCard>
								</Grid.Column>
							))}
						</Grid.Row>
					</Grid>
				</Segment>
			)}
		</Segment>
	);
};

export default Search;
