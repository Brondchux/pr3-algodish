import { Header, Icon, Segment, Message, Progress, Button } from "semantic-ui-react";
import { FETCH_WHOLE_DISH_BY_ID } from "../utils/queries";
import MainButton from "../components/MainButton";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import CookingBanner from "../components/CookingBanner";
import React, { useState } from "react";

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

    const [cookState, setCookState] = useState({
        totalCookTime: cook_time,
        totalTimePassed: 0,
        currenStepTimePassed: 0,
        currentStep: 0,
        steps: instructions,
        currentStep: 0
    })
    
    const incrementStep = (event) => {
        event.preventDefault();
        let currentStep = cookState.currentStep;
        const numSteps = cookState.steps.length - 1;

        if ( currentStep < numSteps ) {
            currentStep++
            setCookState({
                ...cookState,
                currentStep
            })
        };
    };

    const decrementStep = (event) => {
        event.preventDefault();
        let currentStep = cookState.currentStep;
        const numSteps = cookState.steps.length - 1;

        if ( currentStep > 0) {
            currentStep--
            setCookState({
                ...cookState,
                currentStep
            })
        };
    };

    console.log(cookState.steps)

    return (
        <>
            <CookingBanner imageUrl={image} title={title} cook_time={cook_time}></CookingBanner>
            <Segment basic padded="very">
            <div>
                <Progress percent={33} size="big"/>
                <Progress percent={cookState.currentStep/cookState.steps.length * 100} size="big" indicating />
            </div>
            {loading ? (
                <Loading></Loading>
            ) : (
                <Segment raised padded="very">
                
                    <Header as="h3" size="huge" textAlign="center">
                        <p><Icon name="utensils"></Icon> {cookState.steps[cookState.currentStep].step} <Icon name="utensils"></Icon></p>
                    </Header>
                    <Header textAlign="center">
                        <Button.Group>
                            <Button onClick={decrementStep} labelPosition='left' icon='left chevron' content='Back' />
                            <Button onClick={incrementStep} labelPosition='right' icon='right chevron' content='Forward' />
                        </Button.Group>
                    </Header>
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