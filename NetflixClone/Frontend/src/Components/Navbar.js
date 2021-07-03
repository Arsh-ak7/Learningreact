import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import "../CSS/Navbar.css";

export default function Navbar() {
	const [show, handleShow] = useState(false);
	const { user, logout } = useContext(AuthContext);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) handleShow(true);
			else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);
	return (
		<div className={`nav ${show && "nav-black"}`}>
			<Link to='/'>
				<img
					className='nav-logo'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png'
					alt='Netflix logo'
				/>
			</Link>
			<div className='btn-wrapper'>
				{user && (
					<>
						<Avatar className='avatar'>{user.username[0]}</Avatar>
						<Link to='/subcribe'>
							<button className='subscribe-btn'>Subscribe</button>
						</Link>
						<button className='logout-btn' onClick={logout}>
							LogOut
						</button>
					</>
				)}
				{/* <img 
                className="avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Goodtimes.jpg"
                alt="avatar"
            /> */}
			</div>
		</div>
	);
}
