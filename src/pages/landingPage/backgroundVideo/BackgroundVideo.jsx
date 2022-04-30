import React from "react";

import backgroundVideo from "../../../assets/videos/backgroundVideos/mechanic.webm";
import classes from "./backgroundVideo.module.css";

function LandingPageVideo() {

	return(
		<video autoPlay loop muted className={classes.backgroundVid}>
			<source src={backgroundVideo} />
		</video>
	);
}

export default LandingPageVideo;