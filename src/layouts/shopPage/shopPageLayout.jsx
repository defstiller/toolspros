import React from "react";

import Header from "../../components/header/Header";
import SearchBar from "../../pages/shopPage/searchBar/SearchBar";
import FeaturedProducts from "../../pages/shopPage/featuredProducts/FeaturedProducts";
import ProductList from "../../pages/shopPage/productList/ProductList";

function ShopPageLayout() {

	return(
		<>
			<Header />
			<SearchBar />
			<FeaturedProducts />
			<ProductList />
		</>
	);
}

export default ShopPageLayout;