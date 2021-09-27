import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Auth/Dashboard";
import CreateDish from "./pages/Auth/CreateDish";

const App = () => {
	return (
		<BrowserRouter>
			{/* display header */}
			<Header></Header>

			{/* display requested pages */}
			<main>
				<Route exact path="/">
					<Home></Home>
				</Route>
				<Route exact path="/login">
					<Login></Login>
				</Route>
				<Route exact path="/signup">
					<Signup></Signup>
				</Route>
				<Route exact path="/dashboard">
					<Dashboard></Dashboard>
				</Route>
				<Route exact path="/create-dish">
					<CreateDish></CreateDish>
				</Route>
			</main>

			{/* display footer */}
			<Footer></Footer>
		</BrowserRouter>
	);
};

export default App;
