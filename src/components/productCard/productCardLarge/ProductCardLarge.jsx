import React from "react";
import PropTypes from "prop-types";

function ProductCardLarge(props) {
	const {products} = props;
	return (
		<div>
			{products.map(product => {
				return <article key={product.name}>{product.name}</article>;
			})}
			<nav>All Featured Products</nav>
		</div>
	);
}

ProductCardLarge.propTypes = {
	products: PropTypes.array
};

export default ProductCardLarge;