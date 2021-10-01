import { Header, Icon, Segment, Message, List, Grid, Item } from "semantic-ui-react";
import { FETCH_WHOLE_DISH_BY_ID } from "../utils/queries";
import MainButton from "../components/MainButton";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import CookingBanner from "../components/CookingBanner";

const Cook = () => {
    const { id: dishId } = useParams();
	const { loading, data } = useQuery(FETCH_WHOLE_DISH_BY_ID, {
		variables: { id: dishId },
	});

    const {
		title,
		image,
		username,
		description,
		ingredients,
		instructions,
		recipe,
		cook_time,
	} = data?.dishById || {};
    
    return (
        <>
            <CookingBanner imageUrl={image} title={title} cook_time={cook_time}></CookingBanner>
            <Segment basic padded="very">
            {loading ? (
                <Loading></Loading>
            ) : (
                <Segment raised padded="very">
                
                    <Header as="h3" size="huge">
                        <Icon name="utensils"></Icon>
                    </Header>
                    <Message>
                        <Message.Header>
                            <Icon name="user outline"></Icon>  says:
                        </Message.Header>
                        <p>description</p>
                    </Message>
                    <Message>
                        <Message.Header>Ingredients</Message.Header>
                    
                    </Message>
                
                        
                </Segment>
            )}
        </Segment>
    </>
    )
};

export default Cook;