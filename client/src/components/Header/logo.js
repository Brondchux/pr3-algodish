import "./header.css";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<div>
			<Link to="/">
				<h1>
					<i className="fas fa-bread-slice"></i> AlgoDish
				</h1>
			</Link>
		</div>
	);
};

export default Logo;
