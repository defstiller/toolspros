import React from "react";
import PropTypes from "prop-types";

import ProductCardSmall from "../../../components/productCard/productCardSmall/ProductCardSmall";

import classes from "./productList.module.css";

function ProductList({data}) {
	const {receivedData, loading, error} = data;
	return(
		<div className={classes.productDiv}>
			{loading && <p>Loading...</p>}
			<main className={classes.productMain}>
				{receivedData && receivedData.map(data => {
					return <ProductCardSmall key={data.name} product={data}/>;
				})}
			</main>
		</div>
	);
}
ProductList.propTypes = {
	data: PropTypes.any
};
export default ProductList;