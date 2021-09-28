import { Message, Form, Icon, Header } from "semantic-ui-react";
import MainButton from "../MainButton";
import { useMutation } from '@apollo/client';
import { CREATE_NEW_DISH } from '../../utils/mutations';
import React, { useState } from 'react';
import { generateRandomId } from '../TestDishes/index'

const CreateDishForm = () => {
	const [formState, setFormState] = useState({
		title: '',
		username: '',
		description: '',
		image: '',
		ingredients: '',
		recipe: '',
		cook_time: generateRandomId() //parseInt('233')
	});

	const [createNewDish, { error, data }] = useMutation(CREATE_NEW_DISH);

	const handleChange = async (event) => {
		
		const { name, value } = event.target;
		console.log(name);

		if (name === 'cook_time') {
			
			const new_value = parseInt(value)
			console.log(new_value)
			setFormState({
				...formState,
				[name]: parseInt(`${value}`)
			});
			console.log(formState)
		}
		setFormState({
			...formState,
			[name]: value
		});
		
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(formState)
		try {
			const { data } = await createNewDish({
				variables: { ...formState }
			});
			console.log(data)
			window.location = `/dish/${data.uploadDish._id}`  
		} catch (e) {
			console.error(e)
		}
	}
	
	return (
		<div>
			<Message>
				<Header as="h3">Create a new dish</Header>
			</Message>
			<Form className="attached fluid segment" onSubmit={handleFormSubmit} >
				<Form.Input label="Dish Title" 
					placeholder="name of dish" 
					type="text" 
					value={formState.title} 
					onChange={handleChange}
					name="title"
				/>
				<Form.Input label="Username" 
					placeholder="username" 
					type="text" 
					value={formState.username} 
					onChange={handleChange}
					name="username"
				/>
				<Form.Input label="Description" 
					placeholder="description" 
					type="text" 
					value={formState.description} 
					onChange={handleChange}
					name="description"
				/>
				<Form.Input label="Image" 
					placeholder="image url" 
					type="text" 
					value={formState.image} 
					onChange={handleChange}
					name="image"
				/>
				<Form.Input label="Cook Time" 
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
				<MainButton 
					title="Submit Dish" 
					>
				</MainButton>
			</Form>
			<Message attached="bottom" teal>
				<Icon name="utensils" />
				Properly describe the steps and ingredents need to prepare this dish.
			</Message>
		</div>
	);
};

export default CreateDishForm;
