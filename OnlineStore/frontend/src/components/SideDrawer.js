import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

export default function SideDrawer({ show, click }) {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const getCount = () => {
		return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
	};
	const sideDrawerClass = ["sidedrawer"];
	if (show) {
		sideDrawerClass.push("show");
	}
	return (
		<div className={sideDrawerClass.join(" ")}>
			<ul className='sidedrawer__links' onClick={click}>
				<li>
					<Link to='/cart'>
						<i className='fas fa-shopping-cart'></i>
						<span>
							Cart <span className='sidedrawer__cartbadge'>{getCount()}</span>
						</span>
					</Link>
				</li>
				<li>
					<Link to='/'>Shop</Link>
				</li>
			</ul>
		</div>
	);
}
