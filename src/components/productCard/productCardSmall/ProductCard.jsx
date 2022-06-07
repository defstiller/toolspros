import React from "react";
import PropTypes from "prop-types";
import { useCart } from "react-use-cart";
// import classes from "./productCardSmall.module.css";

import AddToCart from "../../addToCart/AddToCart";
import ImageWithFallback from "../../imageWithFallback/ImageWithFallback";

function ProductCard(props) {
	const {product, handleProductClick, styles, handleQuantityChange, removeItem} = props;
	const { addItem, inCart, getItem, updateItemQuantity } = useCart();
	const productInCart = getItem(product.id);
	// return(
	// 	<article className={styles.cardArticle + " " + styles.classname}>
	// 		<p>{product.name}</p>

	// 		<p>Price: ${product.price}</p>

	// 		{product.shipping > 0 
	// 			? <p>Shipping: {product.shipping}</p>
	// 			: <p>Free Shipping</p>}

	// 		<div onClick={() => handleProductClick(product)} className={styles.imgDiv}>
	// 			<img src={product.imgUrl} />
	// 		</div>
	// 		<AddToCart product={product} />
	// 	</article>

	// );
	return(
		<article className={styles.cardArticle}>
			<figure>
				<ImageWithFallback src={product.imgUrl} alt={product.name} onClick={() => handleProductClick(product)} className={styles.productImg}/>
			</figure>
			<div className={styles.infoDiv}>
				<p>{product.name}</p>
				<p>Price: ${product.price}</p>
				<p>
					Shipping: {product.shipping > 0 
						? "$"+product.shipping 
						: "FREE"}
				</p>
				<AddToCart product={product} styles={styles}/>
			</div>
			{props.children}
		</article>

	);
}
ProductCard.propTypes = {
	product: PropTypes.any,
	imgUrl: PropTypes.string,
	cartArray: PropTypes.any,
	setCartArray: PropTypes.any,
	handleQuantityChange: PropTypes.any,
	handleProductClick: PropTypes.any,
	styles: PropTypes.any,
	removeItem: PropTypes.any,
	children: PropTypes.any,
};
export default ProductCard;