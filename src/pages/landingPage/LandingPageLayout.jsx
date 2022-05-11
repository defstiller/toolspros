import React from "react";

import HeaderLayout from "../../components/header/HeaderLayout";
import BackgroundVideo from "./backgroundVideo/BackgroundVideo";
import Tagline from "./tagline/Tagline";
import ShopNowButton from "./shopNowButton/ShopNowButton";


function LandingPageLayout() {
	return (<>
		<HeaderLayout />
		<BackgroundVideo />
		<Tagline />
		<ShopNowButton />
	</>
	);
}

export default LandingPageLayout;