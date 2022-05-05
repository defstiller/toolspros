import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import classes from "./productCardSmall.module.css";

function ProductCardSmall(props) {
	const navigate = useNavigate();
	const {product} = props;

	function handleProductClick() { //navigate user on click
		const path = product.id;
		navigate(path);
	}
	return(
		<article className={classes.cardArticle}>
			<p>{product.name}</p>

			<p>Price: ${product.price}</p>

			{product.shipping > 0 
			&& <p>Shipping: {product.shipping}</p>}

			<div onClick={handleProductClick}>
				<img src={product.imgUrl} />
			</div>
			<button>Add to cart</button>

		</article>

	);
}
ProductCardSmall.propTypes = {
	product: PropTypes.any,
	imgUrl: PropTypes.any
};

export default ProductCardSmall;