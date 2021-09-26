import "./header.css";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<div className="logo">
			<Link to="/">
				<h1>
					<i className="utensils icon"></i> algo
					<span className="dish">Dish</span>
				</h1>
			</Link>
		</div>
	);
};

export default Logo;
