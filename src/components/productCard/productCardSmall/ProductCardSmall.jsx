import React from "react";
import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useCart } from "react-use-cart";

import classes from "./productCardSmall.module.css";

function ProductCardSmall(props) {
	const {product, handleQuantityChange, handleProductClick} = props;
	const { addItem, inCart, getItem } = useCart();

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
			{
				inCart(product.id) ?<>
					<div className={classes.changeAmountBtns}>
						<button onClick={() => handleQuantityChange(true, productInCart)}>+</button>
						<p>{productInCart.quantity}</p>
						<button onClick={() => handleQuantityChange(false, productInCart)}>-</button>
					</div>
					<Link to="/cart">
						<button>Go to cart</button>
					</Link>
				</>
					: 
					<button onClick={() => addItem(product, 1)}>Add to cart</button>
			}
					

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