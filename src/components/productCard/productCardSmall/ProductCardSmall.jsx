import React from "react";
import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useCart } from "react-use-cart";

import classes from "./productCardSmall.module.css";

import AddToCart from "../../addToCart/AddToCart";

function ProductCardSmall(props) {
	const {product, handleProductClick} = props;
	const { addItem, inCart, getItem, updateItemQuantity } = useCart();

	const productInCart = getItem(product.id);
	return(
		<article className={classes.cardArticle}>
			<p>{product.name}</p>

			<p>Price: ${product.price}</p>

			{product.shipping > 0 
			&& <p>Shipping: {product.shipping}</p>}

			<div onClick={() => handleProductClick(product)} className={classes.imgDiv}>
				<img src={product.imgUrl} />
			</div>
			<AddToCart product={product} />
		</article>

	);
}
ProductCardSmall.propTypes = {
	product: PropTypes.any,
	imgUrl: PropTypes.string,
	cartArray: PropTypes.any,
	setCartArray: PropTypes.any,
	handleQuantityChange: PropTypes.any,
	handleProductClick: PropTypes.any
};

export default ProductCardSmall;