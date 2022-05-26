import React from "react";
import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useCart } from "react-use-cart";

import classes from "./productCardWide.module.css";

function ProductCardWide(props) {
	const {product, handleQuantityChange, handleProductClick, removeItem} = props;
	const { addItem, inCart, getItem } = useCart();

	const productInCart = getItem(product.id);
	return(
		<article className={classes.cardArticle}>
			<img src={product.imgUrl}  onClick={() => handleProductClick(product)} className={classes.productImg}/>
			<div className={classes.infoDiv}>
				<p>{product.name}</p>
				<p>{product.description}</p>
				<p>Price: ${product.price}</p>
				<p>
					Shipping: {product.shipping > 0 
						? "$"+product.shipping 
						: "FREE"}
				</p>
			</div>

			{
				inCart(product.id) ?<>
					<div className={classes.changeAmountBtns}>
						<div>
							<button onClick={() => handleQuantityChange(false, productInCart)}>-</button>
							<p>{productInCart.quantity}</p>
							<button onClick={() => handleQuantityChange(true, productInCart)}>+</button>
							<button onClick={() => removeItem(product.id)}>&times;</button>
						</div>
					</div>
				</>
					: 
					<button onClick={() => addItem(product, 1)}>Add to cart</button>
			}
					

		</article>

	);
}
ProductCardWide.propTypes = {
	product: PropTypes.any,
	imgUrl: PropTypes.string,
	cartArray: PropTypes.any,
	setCartArray: PropTypes.any,
	handleQuantityChange: PropTypes.any,
	handleProductClick: PropTypes.any,
	removeItem: PropTypes.any
};

export default ProductCardWide;