import mealImag from "../assets/images/salmon-bg.jpg";
const Home = () => {
	const customStyle = {
		wallpaper: {
			width: "100%",
			minHeight: "300px",
			backgroundImage: `url(${mealImag})`,
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
		},
	};
	return (
		<div style={customStyle.wallpaper}>
			<span>&nbsp;</span>
		</div>
	);
};

export default Home;
