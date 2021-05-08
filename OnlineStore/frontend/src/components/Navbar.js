import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<nav className='navbar'>
			<div className='navbarLogo'>
				<h2>MERN Shopping Cart</h2>
			</div>
			<ul className='navbarLinks'>
				<li>
					<Link to='/cart' className='cart__link'>
						<i className='fas fa-shopping-cart' />
						Cart
						<span className='cartlogoBadge'>0</span>
					</Link>
				</li>
				<li>
					<Link to='/'>Shop</Link>
				</li>
			</ul>
			<div className='hamburgermenu'>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
}

export default Navbar;
