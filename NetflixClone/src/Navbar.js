import React, { useEffect, useState } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [show,handleShow] = useState(false);
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
            <img 
                className="nav-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
                alt="Netflix logo"
            />
            <img 
                className="avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Goodtimes.jpg"
                alt="avatar"
            />
        </div>
    )
}
