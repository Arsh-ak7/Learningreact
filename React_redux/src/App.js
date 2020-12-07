import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header';
import CoursesPage from './components/Courses/CoursesPage';
import HomePage from './components/home/HomePage';
import PageNotFound from './components/PageNotFound';

function App() {
	return (
		<div className='app'>
			<Router>
				<Header />
				<Switch>
					<Route path='/about'>
						<AboutPage />
					</Route>
					<Route path='/coursepage'>
						<CoursesPage />
					</Route>
					<Route exact path='/'>
						<HomePage />
					</Route>
					<Route>
						<PageNotFound />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
