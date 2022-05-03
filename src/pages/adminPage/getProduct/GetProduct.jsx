import React, {useEffect} from "react";

import useAddGetData from "../../../logic/firebaseLogic/firebaseDB/useAddGetData";

import ProductCardSmall from "../../../components/productCard/productCardSmall/ProductCardSmall";

function GetProduct() {
	const {loading, error, receivedData, getData} = useAddGetData();

	useEffect(() => {
		getData("products");
	}, []);

	return(
		<div>
			{error && <p>error</p>}
			{loading || receivedData.map(product => {
				return <ProductCardSmall product={product} key={product.name}/>;
			})}
			{loading && <p>Loading...</p>}
		</div>
	);
}

export default GetProduct;