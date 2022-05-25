import React, { Suspense, lazy } from "react";

import HeaderLayout from "../../components/header/HeaderLayout";
const BackgroundVideo = lazy (() => import ("./backgroundVideo/BackgroundVideo"));
import Tagline from "./tagline/Tagline";
import ShopNowButton from "./shopNowButton/ShopNowButton";

import Loading from "../../assets/svgsReactReady/loading/LoadingSvg";

function LandingPageLayout() {
	return (<>
		<Suspense fallback={<Loading />}>
			<HeaderLayout />
			<BackgroundVideo />
			<Tagline />
			<ShopNowButton />
		</Suspense>
	</>
	);
}

export default LandingPageLayout;