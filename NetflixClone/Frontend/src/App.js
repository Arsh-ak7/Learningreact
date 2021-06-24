import React, { useEffect, useState } from 'react';
import './CSS/App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';
import AppContext from './config/AppContext'
import routes from './routes/routes'
import AuthRoute from './routes/AuthRoute'
import GuestRoute from './routes/GuestRoute'
import firebase from './config/firebase'

function App() {
const[isLoggedin , setIsloggedin] = useState(false);
const [user, setUser] = useState({});

useEffect(()=>{  
  firebase.auth().onAuthStateChanged(user =>{
    if(user){
      setUser(user);
      setIsloggedin(true);      
    }
    else{
      setUser({});
      setIsloggedin(false);      
    }
  })
},[])

  return (
    <div className="app">
      <Router>
        <AppContext.Provider value={[isLoggedin,user]}>
        <Navbar />
        <Switch>
          {
            routes.map((route,index)=>{
              if(route.protected==="guest"){
                return(
                  <GuestRoute
                  key = {index}
                  path =  {route.path}
                  exact= {route.exact}
                  component = {route.component} />
                )
              }
              if(route.protected==="auth"){
                return(
                  <AuthRoute
                  key = {index}
                  path =  {route.path}
                  exact= {route.exact}
                  component = {route.component} />
                )
              }
              return(
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}>
                    <route.component />
                </Route>
              )
            })
          }
        </Switch>
        </AppContext.Provider>
      </Router>
    </div>
  );
}

export default App;
