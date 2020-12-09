import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header';
import CoursesPage from './components/Courses/CoursesPage';
import HomePage from './components/home/HomePage';
import PageNotFound from './components/PageNotFound';
import ManageCoursePage from './components/Courses/ManageCoursePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div className='app'>
			<Router>
				<Header />
				<Switch>
					<Route path='/about' component={AboutPage} />
					<Route path='/coursepage' component={CoursesPage} />
					<Route path='/course/:slug' component={ManageCoursePage} />
					<Route path='/course' component={ManageCoursePage} />
					<Route exact path='/' component={HomePage} />
					<Route component={PageNotFound} />
				</Switch>
				<ToastContainer autoClose={3000} hideProgressBar />
			</Router>
		</div>
	);
}

export default App;
