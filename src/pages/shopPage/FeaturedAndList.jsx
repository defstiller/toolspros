import React, {useEffect} from "react";

import FeaturedProducts from "./featuredProducts/FeaturedProducts";
import ProductList from "./productList/ProductList";

import useAddGetData from "../../logic/firebaseLogic/firebaseDB/useAddGetData";

function FeaturedAndList() {
	const {loading, error, receivedData, getData} = useAddGetData();

	useEffect(() => {
		getData("products");
	}, []);
	return <>
		<FeaturedProducts data={{loading, error, receivedData}}/>
		<ProductList data={{loading, error, receivedData}}/>
	</>;
}

export default FeaturedAndList;