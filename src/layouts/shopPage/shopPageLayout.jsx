import React from "react";

import Header from "../../components/header/Header";
import SearchBar from "../../pages/shopPage/searchBar/SearchBar";
import FeaturedAndList from "../../pages/shopPage/FeaturedAndList";
function ShopPageLayout() {

	return(
		<>
			<Header />
			<SearchBar />
			<FeaturedAndList />
		</>
	);
}

export default ShopPageLayout;