import React from "react";
import CartItem from "../components/CartItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Cart.css";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

export default function Cart() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const qtyChangeHandler = (id, qty) => {
		dispatch(addToCart(id, qty));
	};

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
	};

	const getCartSubTotal = () => {
		return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
	};

	return (
		<div className='cartscreen'>
			<div className='cartscreen__left'>
				<h2>Shopping Cart</h2>
				{cartItems.length === 0 ? (
					<div>
						Your cart is Empty <Link to='/'>Go Back</Link>
					</div>
				) : (
					cartItems.map((item) => (
						<CartItem
							item={item}
							qtyChangeHandler={qtyChangeHandler}
							removeFromCartHandler={removeFromCartHandler}
						/>
					))
				)}
			</div>
			<div className='cartscreen__right'>
				<div className='cartscreen__info'>
					<p>Subtotal ({getCartCount()}) items</p>
					<p>{getCartSubTotal().toFixed(2)}</p>
				</div>
				<div>
					<button>Proceed to checkout</button>
				</div>
			</div>
		</div>
	);
}
