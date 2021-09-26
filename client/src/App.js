import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";

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
			</main>
		</BrowserRouter>
	);
};

export default App;
