import { useState } from "react";
import { Form } from "semantic-ui-react";

const SearchBar = () => {
	const [formState, setFormState] = useState({
		search: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(formState);

		// Redirect user to search page
		window.location = `/search/${formState.search}`;
	};
	return (
		<Form onSubmit={handleFormSubmit} autoComplete="off">
			<Form.Input
				fluid
				size="massive"
				icon="search"
				placeholder="Search..."
				name="search"
				type="text"
				value={formState.search}
				onChange={handleChange}
			/>
		</Form>
	);
};
export default SearchBar;
