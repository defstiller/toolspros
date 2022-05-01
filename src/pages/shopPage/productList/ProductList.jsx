import React from "react";

import ProductCardSmall from "../../../components/productCard/productCardSmall/ProductCardSmall";

function ProductList() {
	const products2 = [
		{
			name: "product1"
		},
		{
			name: "product2"
		},
		{
			name: "product3"
		},
		{
			name: "product4"
		}
	];
	return(
		<ProductCardSmall products={products2}/>
	);
}

export default ProductList;