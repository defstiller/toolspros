import React from "react";

import Header from "../../components/header/Header";
import LandingPageVideo from "../../pages/landingPage/backgroundVideo/LandingPageVideo";
import Tagline from "../../pages/landingPage/tagline/Tagline";
import ShopNowButton from "../../pages/landingPage/shopNowButton/ShopNowButton"


function LandingPageLayout() {
	return (<>
		<Header />
		<LandingPageVideo />
		<Tagline />
		<ShopNowButton />
	</>
	);
}

export default LandingPageLayout;