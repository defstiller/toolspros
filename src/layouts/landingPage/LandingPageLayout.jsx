import React from "react";

import Header from "../../components/header/Header";
import BackgroundVideo from "../../components/backgroundVideo/BackgroundVideo";
import Tagline from "../../pages/landingPage/tagline/Tagline";
import ShopNowButton from "../../pages/landingPage/shopNowButton/ShopNowButton"


function LandingPageLayout() {
	return (<>
		<Header />
		<BackgroundVideo />
		<Tagline />
		<ShopNowButton />
	</>
	);
}

export default LandingPageLayout;