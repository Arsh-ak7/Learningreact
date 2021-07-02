import React from "react";
import "./CSS/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { AuthProvider } from "./context/auth";
import Start from "./Pages/Start";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import AuthRoute from "./utils/authRoute";
import GuestRoute from "./utils/guestRoute";

function App() {
	return (
		<div className='app'>
			<AuthProvider>
				<Router>
					<Navbar />
					<AuthRoute exact path='/signup' component={SignUp} />
					<AuthRoute exact path='/login' component={Login} />
					<GuestRoute exact path='/home' component={Home} />
					<Route exact path='/' component={Start} />
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
