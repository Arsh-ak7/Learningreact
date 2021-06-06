import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BootcampsPage from "./pages/BootcampsPage";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/' component={BootcampsPage} />
			</Switch>
		</Router>
	);
}

export default App;
