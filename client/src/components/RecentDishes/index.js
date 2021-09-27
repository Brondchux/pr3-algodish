import { Header, Icon, Segment } from "semantic-ui-react";
import Carousel from "../Carousel";
import TestDishes from "../TestDishes";
import { FETCH_LAST_FOUR_DISHES } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const RecentDishes = () => {
	const { loading, data } = useQuery(FETCH_LAST_FOUR_DISHES);
	const dishList = () => data?.lastFourDishes || TestDishes;
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
						<span className="cadet-color">Recently added dishes</span>
					</Header>
					<Carousel dishList={dishList()}></Carousel>
				</>
			)}
		</Segment>
	);
};

export default RecentDishes;
