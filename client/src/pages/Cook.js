import { Header, Icon, Segment, Message, Progress, Button, List } from "semantic-ui-react";
import { FETCH_WHOLE_DISH_BY_ID } from "../utils/queries";
import MainButton from "../components/MainButton";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import CookingBanner from "../components/CookingBanner";
import React, { useState, useEffect } from "react";
import { valueFromASTUntyped } from "graphql";

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
        cookTimer: '',
        timerOn: false
    })

    const setTimerOn = (val) => {
        setCookState({
            ...cookState,
            timerOn: val
        })
    };

    useEffect(() => {
        let timer = null;

        if (cookState.timerOn) {
            let currentStepTime = cookState.steps[cookState.currentStep]["time"]*60;
            timer = setInterval(() => { 
                if(currentStepTime){
                    currentStepTime--;
                    setCookState({
                        ...cookState,
                        cookTimer: minutesToTimeString(currentStepTime)
                    })
                };  
            } , 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer)
    }, [cookState.timerOn]);

    const incrementStep = (event) => {
        event.preventDefault();
        let currentStep = cookState.currentStep;
        const numSteps = cookState.steps.length - 1;
        let currentStepTime = cookState.steps[currentStep]["time"]*60;

        if ( currentStep < numSteps ) {
            currentStep++
            setCookState({
                ...cookState,
                currentStep,
                cookTimer: minutesToTimeString(currentStepTime),
                timerOn: false
            })
        };
    };

    const decrementStep = (event) => {
        event.preventDefault();
        let currentStep = cookState.currentStep;
        const numSteps = cookState.steps.length - 1;
        let currentStepTime = cookState.steps[currentStep]["time"]*60;

        if ( currentStep > 0) {
            currentStep--
            setCookState({
                ...cookState,
                currentStep,
                cookTimer: minutesToTimeString(currentStepTime),
                timerOn: false
            })
        };
    };

    const minutesToTimeString = (seconds) => {
        const minutesAsString = Math.floor(seconds/60);
        const secondsAsString = seconds % 60;

        return `${minutesAsString}:${secondsAsString}`;
    }

    // const startTimer = (event) => {
    //     event.preventDefault();
        
    //     let currentStepTime = cookState.steps[cookState.currentStep]["time"]*60;
    //     console.log(currentStepTime)
        
    //     timer = setInterval(() => { 
    //         if(currentStepTime){
    //             currentStepTime--;
    //             setCookState({
    //                 ...cookState,
    //                 cookTimer: minutesToTimeString(currentStepTime)
    //             })
    //         };  
    //     } , 1000);
    // }
    

    console.log(cookState.steps)
    console.log(ingredientsList)

    return (
        <>
            <CookingBanner imageUrl={image} title={title} cook_time={cook_time}></CookingBanner>
            <Segment basic padded="very">
            <div>
                <Progress percent={(cookState.totalTimePassed/cookState.totalCookTime) * 100} size="big"/>
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
                            { cookState.timerOn ? (
                                <Button onClick={() => setTimerOn(false)} labelPosition='right' icon='stop' />
                            ) : (
                                <Button onClick={() => setTimerOn(true)} labelPosition='right' icon='play' />
                            )}
                            
                            <Button onClick={incrementStep} labelPosition='right' icon='right chevron' content='Forward' />
                        </Button.Group>
                    </Header>
                    <Message>
                        <Message.Header>Ingredients</Message.Header>
                        <List link>
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