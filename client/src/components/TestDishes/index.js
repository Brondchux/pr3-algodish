import spagettiImg from "../../assets/images/spagetti.jpg";

const generateRandomId = () => Math.floor(Math.random() * 99);
const TestDishes = () => [
	{
		id: generateRandomId(),
		image: spagettiImg,
		title: `Delicious spagetti ${generateRandomId()}`,
		username: "Elle",
		cookTime: generateRandomId(),
		description: "Spagetti cooked in the Zimbabwe style!",
	},
	{
		id: generateRandomId(),
		image: spagettiImg,
		title: `Delicious spagetti ${generateRandomId()}`,
		username: "Elle",
		cookTime: generateRandomId(),
		description: "Spagetti cooked in the Zimbabwe style!",
	},
	{
		id: generateRandomId(),
		image: spagettiImg,
		title: `Delicious spagetti ${generateRandomId()}`,
		username: "Elle",
		cookTime: generateRandomId(),
		description: "Spagetti cooked in the Zimbabwe style!",
	},
	{
		id: generateRandomId(),
		image: spagettiImg,
		title: `Delicious spagetti ${generateRandomId()}`,
		username: "Elle",
		cookTime: generateRandomId(),
		description: "Spagetti cooked in the Zimbabwe style!",
	},
];

export default TestDishes();
