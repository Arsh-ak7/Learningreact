import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../config/AppContext'
import { Link, useHistory } from 'react-router-dom';
import firebase from '../config/firebase';
import '../CSS/Navbar.css'

export default function Navbar() {
    const [show,handleShow] = useState(false);
    const [isLoggedin] = useContext(AppContext);
    const history = useHistory();

    function logout(){
        firebase.auth().signOut().then(res =>{
            history.replace('/login')
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100)
            handleShow(true);
            else
            handleShow(false);
        });
        return () =>{
            window.removeEventListener("scroll");
        };
    },[])
    return (
        <div className={`nav ${show && 'nav-black'}`}>
            <Link to="/">
            <img 
                className="nav-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
                alt="Netflix logo"
            />
            </Link>
            <div className="btn-wrapper">
            {
                isLoggedin && <button className="logout-btn" onClick ={logout}>LogOut</button>
            }
            <img 
                className="avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Goodtimes.jpg"
                alt="avatar"
            />
            </div>
        </div>
    )
}
