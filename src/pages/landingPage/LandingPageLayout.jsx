import React from "react";

import Header from "../../components/header/Header";
import BackgroundVideo from "./backgroundVideo/BackgroundVideo";
import Tagline from "./tagline/Tagline";
import ShopNowButton from "./shopNowButton/ShopNowButton";


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