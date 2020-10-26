import React from 'react'
import './App.css';
import Header from './Components/Header';
import RecommendedVideos from './Components/RecommendedVideos';
import Sidebar from './Components/Sidebar';
import SearchPage from './Components/SearchPage'
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
              <div className="app-page">
                <Sidebar />
                <SearchPage />
              </div>
          </Route>
          <Route path='/'>
              <div className="app-page">
                <Sidebar />
                <RecommendedVideos />
              </div>
          </Route>
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
