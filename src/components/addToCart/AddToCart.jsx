import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import PropTypes from "prop-types";

import handleQuantityChange from "../../logic/product/handleQuantityChange";

import classes from "./addToCart.module.css";

function AddToCart(props) {
	const {product} = props;
	const { addItem, inCart, getItem, updateItemQuantity } = useCart();
	const productInCart = getItem(product.id);
	return (
		<div>{
			inCart(product.id) 
				? <>
					<div className={classes.changeAmountBtns}>
						<button onClick={() => handleQuantityChange(false, productInCart, updateItemQuantity)}>-</button>
						<p>{productInCart.quantity}</p>
						<button onClick={() => handleQuantityChange(true, productInCart, updateItemQuantity)}>+</button>
					</div>
					<div className={classes.link}>
						<Link to="/cart">
							<button className={classes.cartBtn}>Go to cart</button>
						</Link>
					</div>
				</>
				: 
				<div className={classes.addToCartDiv}>
					<button onClick={() => addItem(product, 1)}>
						Add to cart
					</button>
				</div>
		}</div>
	);
}
AddToCart.propTypes = {
	product: PropTypes.any,
};

export default AddToCart;