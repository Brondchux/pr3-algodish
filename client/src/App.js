import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

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
			</main>
		</BrowserRouter>
	);
};

export default App;
