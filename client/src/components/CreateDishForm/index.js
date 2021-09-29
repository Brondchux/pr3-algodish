import { Message, Form, Icon, Header, Button } from "semantic-ui-react";
import MainButton from "../MainButton";
import { useMutation } from "@apollo/client";
import { CREATE_NEW_DISH } from "../../utils/mutations";
import React, { useState } from "react";
import { generateRandomId } from "../TestDishes/index";
import Auth from "../../utils/auth";
import { parse } from "graphql";

const CreateDishForm = () => {
	const [formState, setFormState] = useState({
		title: "",
		username: Auth.getUsername(),
		description: "",
		image: "",
		ingredients: "",
		recipe: "",
		numSteps: 1,
		instruction: [],
		cook_time: generateRandomId(), //parseInt('233')
		steps : [],
		stepsArray: [1]
	});

	const [createNewDish] = useMutation(CREATE_NEW_DISH);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const incrementNumSteps = () => {
		const newNumSteps = parseInt(formState.numSteps) + 1;
		const stepsArray = [];
		const steps = [];

		for (let i=1; i<=newNumSteps; i++) {
			stepsArray.push(i)
			let item = {}
			item["step-" + i] = '';
			item["time-" + i] = null;
			steps.push(item)
		};
		
		setFormState({
			...formState,
			numSteps: newNumSteps,
			stepsArray,
			steps
		});
	};

	const decrementNumSteps = () => {
		const newNumSteps = parseInt(formState.numSteps) - 1;

		if (newNumSteps > 0){
			const stepsArray = [];
			const steps = [];
	
			for (let i=1; i<=newNumSteps; i++) {
				stepsArray.push(i)
				let item = {}
				item["step-" + i] = '';
				item["time-" + i] = null;
				steps.push(item)
			};
			
			setFormState({
				...formState,
				numSteps: newNumSteps,
				stepsArray,
				steps
			});
		}
	}

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			const { data } = await createNewDish({
				variables: { ...formState },
			});
			window.location = `/dish/${data.uploadDish._id}`;
		} catch (e) {
			console.error(e);
		}
	};


	return (
		<div>
			<Message>
				<Header as="h3">Create a new dish</Header>
			</Message>
			<Form className="attached fluid segment" onSubmit={handleFormSubmit}>
			
				<Form.Input
					label="Dish Title"
					placeholder="name of dish"
					type="text"
					value={formState.title}
					onChange={handleChange}
					name="title"
				/>
				<Form.Input
					label="Description"
					placeholder="description"
					type="text"
					value={formState.description}
					onChange={handleChange}
					name="description"
				/>
				<Form.Input
					label="Image URL"
					placeholder="www.example.com/image/path"
					type="text"
					value={formState.image}
					onChange={handleChange}
					name="image"
				/>
					{formState.stepsArray.map( (id) => (
					
						<Form.Group>
							<Form.Input
								name={`step-${id}`}
								label={`Step ${id}`}
								placeholder="boil water"
								type="text"
								width={12}
							/>
							<Form.Input
								name={`time-${id}`}
								label="Time"
								placeholder="minutes"
								type="number"
								width={4}
							/>
						</Form.Group>
					
				))}
				<Button.Group size='small'>
    				<Button onClick={decrementNumSteps}>-</Button>
    				<Button.Or />
    				<Button onClick={incrementNumSteps}>+</Button>
  				</Button.Group>
				<Form.Input
					label="Cook Time"
					placeholder="cook time"
					type="text"
					value={formState.cook_time}
					onChange={handleChange}
					name="cook_time"
				/>
				<Form.TextArea
					label="Dish Ingredients"
					placeholder="example: water, red peppers, oil..."
					rows={5}
					value={formState.ingredients}
					onChange={handleChange}
					name="ingredients"
				/>
				<Form.TextArea
					label="Dish Procedure"
					placeholder="example: step 1, heat water for 5 mins;"
					rows={5}
					value={formState.recipe}
					onChange={handleChange}
					name="recipe"
				/>
				<MainButton title="Submit Dish"></MainButton>
			</Form>
			<Message attached="bottom">
				<Icon name="utensils" />
				Properly describe the steps and ingredents need to prepare this dish.
			</Message>
		</div>
	);
};

export default CreateDishForm;
