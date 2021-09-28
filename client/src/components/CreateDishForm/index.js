import { Message, Form, Icon, Header } from "semantic-ui-react";
import MainButton from "../MainButton";
import { useMutation } from '@apollo/client';
import { CREATE_NEW_DISH } from '../utils/mutations';

const CreateDishForm = () => {
	const [formState, setFormState] = useState({
		title: '',
		username: '',
		description: '',
		image: '',
		ingredients: '',
		recipe: '',
		cook_time: ''
	});

	const [createNewDish, { error, data }] = useMutation(CREATE_NEW_DISH);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name] : value
		});
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await createNewDish({
				variables: { ...formState }
			});
		} catch (e) {
			console.error(e)
		}
	}
	
	return (
		<div>
			<Message>
				<Header as="h3">Create a new dish</Header>
			</Message>
			<Form className="attached fluid segment">
				<Form.Input label="Dish Title" placeholder="name of dish" type="text" value={formState.title} onChange={handleChange}/>
				<Form.TextArea
					label="Dish Ingredients"
					placeholder="example: water, red peppers, oil..."
					rows={5}
					value={formState.ingredients} 
					onChange={handleChange}
				/>
				<Form.TextArea
					label="Dish Procedure"
					placeholder="example: step 1, heat water for 5 mins;"
					rows={5}
					value={formState.recipe} 
					onChange={handleChange}
				/>
				<MainButton title="Submit Dish" onSubmit={handleFormSubmit}></MainButton>
			</Form>
			<Message attached="bottom" teal>
				<Icon name="utensils" />
				Properly describe the steps and ingredents need to prepare this dish.
			</Message>
		</div>
	);
};

export default CreateDishForm;
