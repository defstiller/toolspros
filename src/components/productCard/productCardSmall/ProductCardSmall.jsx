import React from "react";
import PropTypes from "prop-types";

function ProductCardSmall(props) {
	const {products} = props;
	return(
		<main>
			{products.map(product =>{
				return (
					<article key={product.name}>
						{product.name}
					</article>);
			})}
		</main>
	);
}
ProductCardSmall.propTypes = {
	products: PropTypes.array
};

export default ProductCardSmall;