import { Header, Icon, Segment, Message, Progress, Button, List } from "semantic-ui-react";
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

    const ingredientsList = ingredients.split(',').map(item => item.trim())

    const [cookState, setCookState] = useState({
        totalCookTime: cook_time,
        totalTimePassed: 0,
        currenStepTimePassed: 0,
        steps: instructions,
        currentStep: 0,
        cookTimer: ''
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

    const minutesToTimeString = (seconds) => {
        const minutesAsString = Math.floor(seconds/60);
        const secondsAsString = seconds % 60;

        return `${minutesAsString}:${secondsAsString}`;
    }

    const startTimer = (event) => {
        event.preventDefault();
        let currentStepTime = cookState.steps[cookState.currentStep]["time"]*60;
        console.log(currentStepTime)
        setInterval(() => { 
            if(currentStepTime){
                currentStepTime--;
                setCookState({
                    ...cookState,
                    cookTimer: minutesToTimeString(currentStepTime)
                })
            };  
        } , 1000);
    }
    

    console.log(cookState.steps)
    console.log(ingredientsList)

    return (
        <>
            <CookingBanner imageUrl={image} title={title} cook_time={cook_time}></CookingBanner>
            <Segment basic padded="very">
            <div>
                <Progress percent={33} size="big"/>
                <Progress percent={cookState.currentStep/(cookState.steps.length-1) * 100} size="big" indicating />
                {cookState.cookTimer}
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
                            <Button onClick={startTimer} labelPosition='right' icon='play' />
                            <Button onClick={incrementStep} labelPosition='right' icon='right chevron' content='Forward' />
                        </Button.Group>
                    </Header>
                    <Message>
                        <Message.Header>Ingredients</Message.Header>
                        <List link>
                            {/* <List.Item active as='a' target="_blank" href='https://en.wikipedia.org/wiki/Thyme'>Home</List.Item>
                            <List.Item as='a' target="_blank">About</List.Item>
                            <List.Item as='a' target="_blank">Jobs</List.Item>
                            <List.Item as='a' target="_blank">Team</List.Item> */}
                            { ingredientsList.map( ingredient => {
                                if (cookState.steps[cookState.currentStep].step.includes(ingredient)){
                                    return <List.Item active as='a' target="_blank" href={`https://en.wikipedia.org/wiki/${ingredient}`}>{ingredient}</List.Item>
                                } else {
                                    return <List.Item as='a' target="_blank" href={`https://en.wikipedia.org/wiki/${ingredient}`}>{ingredient}</List.Item>
                                }
                            }) }
                        </List>
                    </Message>                     
                </Segment>
            )}
        </Segment>
    </>
    )
};

export default Cook;