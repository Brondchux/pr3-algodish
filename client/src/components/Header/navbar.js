import "./header.css";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				{Auth.loggedIn() ? (
					<>
						<li>
							<Link to={`/dashboard/${Auth.getUserId()}`}>Dashboard</Link>
						</li>
						<li>
							<Link to="#" onClick={Auth.logout}>
								Logout
							</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/signup">Signup</Link>
						</li>
					</>
				)}
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
