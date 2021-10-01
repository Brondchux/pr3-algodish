import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dish from "./pages/Dish";
import Cook from "./pages/Cook"
import Search from "./pages/Search";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/Auth/Dashboard";
import CreateDish from "./pages/Auth/CreateDish";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
	uri: "/graphql",
	cache: new InMemoryCache(),
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				{/* display header */}
				<Header></Header>

				{/* display requested pages */}
				<main>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route exact path="/dish/:id">
						<Dish></Dish>
					</Route>
					<Route exact path="/dish/:id/cook">
						<Cook></Cook>
					</Route>
					<Route exact path="/search/:query">
						<Search></Search>
					</Route>
					<Route exact path="/login">
						<Login></Login>
					</Route>
					<Route exact path="/signup">
						<Signup></Signup>
					</Route>
					<Route exact path="/dashboard/:userId">
						<Dashboard></Dashboard>
					</Route>
					<Route exact path="/dashboard/:userId/create-dish">
						<CreateDish></CreateDish>
					</Route>
					<Route exact path="/about">
						<AboutUs></AboutUs>
					</Route>
				</main>

				{/* display footer */}
				<Footer></Footer>
			</BrowserRouter>
		</ApolloProvider>
	);
};

export default App;
