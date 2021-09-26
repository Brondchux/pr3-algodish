import { Message, Form, Icon, Header } from "semantic-ui-react";
import MainButton from "../MainButton";

const CreateDishForm = () => {
	return (
		<div>
			<Message>
				<Header as="h3">Create a new dish</Header>
			</Message>
			<Form className="attached fluid segment">
				<Form.Input label="Dish Title" placeholder="name of dish" type="text" />
				<Form.TextArea
					label="Dish Ingredients"
					placeholder="example: water, red peppers, oil..."
					rows={5}
				/>
				<Form.TextArea
					label="Dish Procedure"
					placeholder="example: step 1, heat water for 5 mins;"
					rows={5}
				/>
				<MainButton title="Submit Dish"></MainButton>
			</Form>
			<Message attached="bottom" teal>
				<Icon name="utensils" />
				Properly describe the steps and ingredents need to prepare this dish.
			</Message>
		</div>
	);
};

export default CreateDishForm;
