import React, {useEffect} from "react";

import ProductCardSmall from "../../../components/productCard/productCardSmall/ProductCardSmall";
import useAddGetData from "../../../logic/firebaseLogic/firebaseDB/useAddGetData";

import classes from "./productList.module.css";

function ProductList() {
	const {loading, error, receivedData, getData} = useAddGetData();

	useEffect(() => {
		getData("products");
	}, []);

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

export default ProductList;