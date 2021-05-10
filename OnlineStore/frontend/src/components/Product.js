import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

export default function Product({
	imageUrl,
	name,
	price,
	description,
	productId,
}) {
	return (
		<div className='product'>
			<img src={imageUrl} alt='Product' />
			<div className='prodyct__info'>
				<p className='info__name'>{name}</p>
				<p className='info__descriptioin'>{description}</p>
				<p className='info__price'>${price}</p>
				<Link to={`/product/${productId}`} className='info__button'>
					View
				</Link>
			</div>
		</div>
	);
}
