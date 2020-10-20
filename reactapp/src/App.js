import React, { useEffect, useState } from "react";
import "./assests/css/style.css"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routes from "./Utils/routes";
import Navbar from "./components/Navbar";
import firebase from "./config/firebase"
import AppContext from "./store/AppContext"
import AuthRoute from "./Utils/AuthRoute";
import GuestRoute from "./Utils/GuestRoute";
import Loading from "./components/Loading";
import NotFound from "./pages/NotFound";

function App() { 
    const [isLoggedin, setisLoggedin] = useState(false)
    const [isLoading, setisLoading] = useState(true)
    const [user, setUser] = useState({});
    useEffect(() => {
        setisLoading(true);
        firebase.auth().onAuthStateChanged(user =>{
          if(user){
          setisLoggedin(true);
          setUser(user); 
          setisLoading(false);
        }
        else{
            setUser({});
            setisLoading(false);
            setisLoggedin(false);
        }
        })
      }, [])
      if(isLoading===true) return <Loading />
    return (
    <Router>
        <AppContext.Provider value={[isLoggedin,user]}>
        <Navbar />
            <Switch>
                {
                routes.map((route,index) => {
                    if(route.protected==="guest"){
                        return(
                            <GuestRoute
                                key = {index}
                                path = {route.path}
                                exact = {route.exact}
                                component = {route.component}
                        />
                        )}
                    if(route.protected==="auth"){
                        return (
                            <AuthRoute
                                key = {index}
                                path = {route.path}
                                exact = {route.exact}
                                component = {route.component}
                        />
                        )}

                    return (
                    <Route 
                        key ={index}
                        path ={route.path}
                        exact ={route.exact}>
                            <route.component />
                </Route>
                )})
                }
                <Route path ="*">
                    <NotFound />
                    </Route>
            </Switch>
            </AppContext.Provider>
    </Router>);
}


// class App extends React.Component{
    
//     constructor(props){
//         super(props);
//         this.state ={ title: "Hello React 2", isShowing: false};
//     }
    
//     componentDidMount(){
//         console.log("Mounted Comp");
//         this.setState({title : " Changed "});
//     }

//     componentDidUpdate(){
//         console.log("Updated")
//     }

//     handleClick = () => {
//         this.setState({isShowing : !this.state.isShowing});
//     };

    // render(){
    //     console.log("Rendered");
    // return (
    //     <section className="flex justify-center">
    //        <div className="w-1/2">
    //            <div className="text-center">
    //              <div className="my-4">{this.state.title}</div>
    //              <button className="p-1 bg-blue-600 text-white my-2" onClick={this.handleClick}>Toggle button </button>
    //            </div>
    //            {this.state.isShowing ? (
    //              <Images />
    //            ):null }
    //         </div> 
    //     </section>
    // )
    // }
// }


export default App;