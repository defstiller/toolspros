import React from "react";
import PropTypes from "prop-types";

function ProductCardSmall(props) {
	const {product} = props;
	return(
		<article>
			<p>
				{product.name}
			</p>
			<p>
				{product.description}
			</p>
			<p>{product.isFeatured}</p>
			<p>{product.price}</p>
			<p>{product.shipping}</p>
			<p>{product.style}</p>
			<img src={product.imgUrl} />
			<p>{product.category}</p>

		</article>

	);
}
ProductCardSmall.propTypes = {
	product: PropTypes.any,
	imgUrl: PropTypes.any
};

export default ProductCardSmall;