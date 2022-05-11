import React, {useEffect} from "react";

import {ProductDataContext} from "../../context/context";
import useAddGetData from "../../logic/firebaseLogic/firebaseDB/useAddGetData";

import HeaderLayout from "../../components/header/HeaderLayout";
import SearchBar from "./products/SearchBar";
import FeaturedProducts from "./featuredProducts/FeaturedProducts";
function ShopPageLayout() {

	const {loading, error, receivedData, getData} = useAddGetData();
	useEffect(() => {
		getData("products");
	}, []);
	return(
		<ProductDataContext.Provider value={{
			loading, error, receivedData
		}}>
			<HeaderLayout />
			<FeaturedProducts />
			<SearchBar />
		</ProductDataContext.Provider>
	);
}

export default ShopPageLayout;