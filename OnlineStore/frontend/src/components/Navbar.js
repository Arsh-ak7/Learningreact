import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ click }) {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const getCount = () => {
		return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
	};

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
						<span className='cartlogoBadge'>{getCount()}</span>
					</Link>
				</li>
				<li>
					<Link to='/'>Shop</Link>
				</li>
			</ul>
			<div className='hamburgermenu' onClick={click}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
}

export default Navbar;
