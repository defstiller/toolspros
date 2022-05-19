import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import PropTypes from "prop-types";

import handleQuantityChange from "../../logic/product/handleQuantityChange";

function AddToCart(props) {
	const {product, styles} = props;
	const { addItem, inCart, getItem, updateItemQuantity } = useCart();
	const productInCart = getItem(product.id);
	return (
		<div>{
			inCart(product.id) 
				? <>
					<div className={styles.changeAmountBtns}>
						<button onClick={() => handleQuantityChange(false, productInCart, updateItemQuantity)}>-</button>
						<p>{productInCart.quantity}</p>
						<button onClick={() => handleQuantityChange(true, productInCart, updateItemQuantity)}>+</button>
					</div>
					<div className={styles.link}>
						<Link to="/cart">
							<button className={styles.cartBtn}>Go to cart</button>
						</Link>
					</div>
				</>
				: 
				<div className={styles.addToCartDiv}>
					<button onClick={() => addItem(product, 1)}>
						Add to cart
					</button>
				</div>
		}</div>
	);
}
AddToCart.propTypes = {
	product: PropTypes.any,
	styles: PropTypes.any
};

export default AddToCart;