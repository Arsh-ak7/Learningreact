import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
	return (
		<Router>
			<Navbar />
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/product/:id' component={Product} />
					<Route exact path='cart' component={Cart} />
				</Switch>
			</main>
		</Router>
	);
}

export default App;
