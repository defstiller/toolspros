import React from "react";

import ProductCardLarge from "../../../components/productCard/productCardLarge/ProductCardLarge";

function FeaturedProducts() {
	const products = [
		{
			name: "productSpecial1"
		},
		{
			name: "productSpecial2"
		},
		{
			name: "productSpecial3"
		},
		{
			name: "productSpecial4"
		}
	];
	return (
		<section>
			<div>
				<h3>Featured Products</h3>
				<p>Aute cillum labore ipsum laboris velit irure sunt velit aliqua.</p>
			</div>
			<ProductCardLarge products={products}/>
		</section>
	);
}

export default FeaturedProducts;