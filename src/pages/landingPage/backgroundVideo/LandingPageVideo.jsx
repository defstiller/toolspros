import React from "react";

import backgroundVideo from "../../../assets/videos/landingPageVideos/mechanic.webm";
import classes from "./landingPageVideo.module.css";

function LandingPageVideo() {

	return(
		<video autoPlay loop muted className={classes.backgroundVid}>
			<source src={backgroundVideo} />
		</video>
	);
}

export default LandingPageVideo;