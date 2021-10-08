import { Header, Icon, Segment, Message, Progress, Button, List, Statistic } from "semantic-ui-react";
import { FETCH_WHOLE_DISH_BY_ID } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import CookingBanner from "../components/CookingBanner";
import React, { useState, useEffect } from "react";

const Cook = () => {
    const { id: dishId } = useParams();
	const { loading, data } = useQuery(FETCH_WHOLE_DISH_BY_ID, {
		variables: { id: dishId },
	});
    
    console.log(dishId)
    console.log(data)

    const {
		title,
		image,
		ingredients,
		instructions,
		cook_time,
	} = data?.dishById || {};

    const ingredientsList = ingredients ? ingredients.split(',').map(item => item.toLowerCase().trim()) : [];
  
    const [cookState, setCookState] = useState({
        totalCookTime: cook_time*60,
        totalTimePassed: 0,
        currentStepTimePassed: 0,
        currentStepTime: instructions ? instructions[0]["time"]*60 : 0,
        steps: instructions ? instructions : [],
        currentStep: 0,
        cookTimer: '',
        timerOn: false
    })
    console.log(cookState)
    const setTimerOn = (val) => {
        setCookState({
            ...cookState,
            timerOn: val
        })
    };

    useEffect(() => {
        let timer = null;

        if (cookState.timerOn) {
            let currentStepTime = cookState.cookTimer;
            timer = setInterval(() => { 
                if (currentStepTime){
                    currentStepTime--;
                    setCookState({
                        ...cookState,
                        cookTimer: currentStepTime,
                        currentStepTimePassed: cookState.currentStepTimePassed++
                    })
                } else {
                    incrementStep();
                }  
            } , 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer)
    }, [cookState.timerOn]);

    const incrementStep = () => {
        let currentStep = cookState.currentStep;
        const numSteps = cookState.steps.length - 1;

        if ( currentStep < numSteps ) {
            let elapsedTime = cookState.steps[currentStep]["time"]*60;
            currentStep++
            let currentStepTime = cookState.steps[currentStep]["time"]*60;
            setCookState({
                ...cookState,
                currentStep,
                cookTimer: currentStepTime,
                currentStepTime,
                totalTimePassed: cookState.totalTimePassed + elapsedTime,
                timerOn: false,
                currentStepTimePassed: 0
            })
            console.log('Total Time passed:', cookState.totalTimePassed);
            console.log('Total Cook Time:',cookState.totalCookTime)
        } 
        // else if ( currentStep === numSteps) {
        //     let elapsedTime = cookState.steps[currentStep]["time"]*60;
        //     currentStep++
        //     let currentStepTime = 0;
        //     setCookState({
        //         ...cookState,
        //         currentStep,
        //         cookTimer: currentStepTime,
        //         currentStepTime,
        //         totalTimePassed: cookState.totalTimePassed + elapsedTime,
        //         timerOn: false,
        //         currentStepTimePassed: 0
        //     })
        // }
    };

    const decrementStep = () => {
        let currentStep = cookState.currentStep;
        const numSteps = cookState.steps.length - 1;

        if ( currentStep > 0) {
            let elapsedTime = cookState.steps[currentStep-1]["time"]*60;
            currentStep--;
            let currentStepTime = cookState.steps[currentStep]["time"]*60;
            setCookState({
                ...cookState,
                currentStep,
                cookTimer: currentStepTime,
                totalTimePassed: cookState.totalTimePassed - elapsedTime,
                currentStepTime,
                timerOn: false,
                currentStepTimePassed: 0
            })
        };
    };

    const minutesToTimeString = (seconds) => {
        const minutesAsString = Math.floor(seconds/60);
        const secondsAsString = seconds % 60;

        return `${minutesAsString}:${secondsAsString}`;
    }

    console.log(cookState.steps)
    console.log(ingredientsList)

    return (
        <>
            <CookingBanner imageUrl={image} title={title} cook_time={cook_time}></CookingBanner>
            <Segment basic padded="very">
            <div>
                       
                <Segment padded="very" inverted textAlign="center">
                    <Progress percent={(cookState.totalTimePassed/cookState.totalCookTime) * 100} size="big"/>
                    <Progress percent={(cookState.currentStepTime - cookState.cookTimer)/cookState.currentStepTime * 100} size="big" indicating />
                    <Statistic color='red' inverted>
                    <Statistic.Value>{minutesToTimeString(cookState.cookTimer).substring(0,minutesToTimeString(cookState.cookTimer).indexOf(':'))}</Statistic.Value>
                    <Statistic.Label>Minutes</Statistic.Label>
                    </Statistic>
                    <Statistic color='brown' inverted>
                    <Statistic.Value>{minutesToTimeString(cookState.cookTimer).substring(minutesToTimeString(cookState.cookTimer).indexOf(':')+1,)}</Statistic.Value>
                    <Statistic.Label>Seconds</Statistic.Label>
                    </Statistic>
                </Segment>

            </div>
            {loading ? (
                <Loading></Loading>
            ) : (
                <Segment raised padded="very">
                    <Header as="h3" size="huge" textAlign="center">
                        <p> { `Step ${(cookState.currentStep + 1)}:`} </p>
                    </Header>
                    <Header as="h3" size="huge" textAlign="center">
                        <p><Icon name="utensils"></Icon> { cookState.steps.length ? cookState.steps[cookState.currentStep].step : "" } <Icon name="utensils"></Icon></p>
                    </Header>
                    <Header textAlign="center">
                        <Button.Group>
                            <Button onClick={decrementStep} size="huge" labelPosition='left' icon='left chevron' content='Back' />
                            { cookState.timerOn ? (
                                <Button onClick={() => setTimerOn(false)} size="huge" icon='stop' />
                            ) : (
                                <Button onClick={() => setTimerOn(true)} size="huge" icon='play' />
                            )}
                            
                            <Button onClick={incrementStep} size="huge" labelPosition='right' icon='right chevron' content='Next' />
                        </Button.Group>
                    </Header>
                    <Message>
                        <Message.Header>Ingredients</Message.Header>
                        <List link>
                            { ingredientsList.length && cookState.steps.length ? (
                            ingredientsList.map( ingredient => {
                                if (cookState.steps[cookState.currentStep].step.includes(ingredient)){
                                    return <List.Item active as='a' target="_blank" href={`https://en.wikipedia.org/wiki/${ingredient}`}>{ingredient}</List.Item>
                                } else {
                                    return <List.Item as='a' target="_blank" href={`https://en.wikipedia.org/wiki/${ingredient}`}>{ingredient}</List.Item>
                                }
                            }) 
                            ): (
                                <></>
                            )
                            }
                        </List>
                    </Message>                     
                </Segment>
            )}
        </Segment>
    </>
    )
};

export default Cook;