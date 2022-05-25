import React, {useEffect} from "react";

import useAddGetData from "../../../logic/firebaseLogic/firebaseDB/useAddGetData";

import ProductCard from "../../../components/productCard/productCardSmall/ProductCard";
import styles from "./getProductStyles.module.css";

function GetProduct() {
	const {loading, error, receivedData, getData} = useAddGetData();

	useEffect(() => {
		getData("products");
	}, []);

	return(
		<div>
			{error && <p>error</p>}
			{loading || receivedData.map(product => {
				return <ProductCard product={product} key={product.name} styles={styles}/>;
			})}
			{loading && <p>Loading...</p>}
		</div>
	);
}

export default GetProduct;