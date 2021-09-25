import "./header.css";
import Logo from "./logo";
import Navbar from "./navbar";

const Header = () => {
	return (
		<header>
			<Logo className="logo"></Logo>
			<Navbar className="navbar"></Navbar>
		</header>
	);
};

export default Header;
