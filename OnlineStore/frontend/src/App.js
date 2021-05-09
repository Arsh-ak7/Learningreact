import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/ProductView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import { useState } from "react";

function App() {
	const [sideToggle, setSideToggle] = useState(false);

	return (
		<Router>
			<Navbar click={() => setSideToggle(true)} />
			<SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
			<Backdrop show={sideToggle} click={() => setSideToggle(false)} />
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/product/:id' component={Product} />
					<Route exact path='/cart' component={Cart} />
				</Switch>
			</main>
		</Router>
	);
}

export default App;
