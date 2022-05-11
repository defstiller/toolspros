import React from "react";
import PropTypes from "prop-types";

import handleQuantityChange from "../../../logic/products/handleQuantityChange";

function ProductCardWide(props) {
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

ProductCardWide.propTypes = {
	products: PropTypes.array
};

export default ProductCardWide;