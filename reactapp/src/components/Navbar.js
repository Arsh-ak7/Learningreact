import React, { useContext} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import firebase from "../config/firebase"
import AppContext from "../store/AppContext"

export default function Navbar() {
  const [isLoggedin] = useContext(AppContext);
  const history = useHistory();
  
  function logOut(){
    firebase.auth().signOut().then(res =>{
      history.replace('/login')
    }).catch(err =>{
      console.log(err);
    })
  }
    return (
        <nav className ="py-5 bg-gray-900 text-white">
        <ul className ="flex justify-between px-10">
          <ul className="flex">
          <li className="mr-5">
            <NavLink to="/" exact={true} activeClassName="underline">Home</NavLink>
          </li>
          <li className="mr-5">
            <NavLink to="/gallery" activeClassName="underline">Gallery</NavLink>
          </li>
          <li className="mr-5">
            <NavLink to="/tensorflow" activeClassName="underline">Tensorflow</NavLink>
          </li>
          </ul>
          <ul className="flex mr-3">
          <li className="pr-4">{
            isLoggedin ? <button onClick={logOut}>LogOut</button> :
            <NavLink to="/login" activeClassName="underline">Login</NavLink>
          }
          </li>
          <li>{
            !isLoggedin && <NavLink to="/signup" activeClassName="underline">SignUp</NavLink>
          }
          </li>
        </ul>
        </ul>
      </nav>
    )
}
