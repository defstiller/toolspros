import React from "react";

import useAddGetData from "../../../logic/firebaseLogic/firebaseDB/useAddGetData";

function GetProduct() {
	const {loading, data, error} = useAddGetData("products");


	return(
		<div>
			{loading || data.map(product => {
				return <p key={product.description}>{product.description}</p>;
			})}
			{loading && <p>Loading...</p>}
		</div>
	);
}

export default GetProduct;