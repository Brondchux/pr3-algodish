import { Header, Icon, Segment } from "semantic-ui-react";
import Carousel from "../Carousel";
import TestDishes from "../TestDishes";
import { FETCH_FOUR_RANDOM_DISHES } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const PopularDishes = () => {
	const { loading, data } = useQuery(FETCH_FOUR_RANDOM_DISHES);
	const dishList = () => data?.fourRandomDishes || TestDishes;
	return (
		<Segment basic padded="very">
			{loading ? (
				<Segment placeholder raised textAlign="center">
					<Header textAlign="center" size="large">
						<Icon name="spinner"></Icon>
					</Header>
				</Segment>
			) : (
				<>
					<Header as="h2">
						<span className="cadet-color">Most popular dishes</span>
					</Header>
					<Carousel dishList={dishList()}></Carousel>
				</>
			)}
		</Segment>
	);
};

export default PopularDishes;
