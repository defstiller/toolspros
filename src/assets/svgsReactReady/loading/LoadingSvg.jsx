import React from "react";
import styles from "./loadingSvg.module.css";
function LoadingSvg(props){ // not svg, decided not to create separate folder to not create confusion
	return (<div className={styles.loadingMain} {...props}>
		<div className={styles.loading}>
			<div>

			</div>
		</div>
	</div>
	);

}

export default LoadingSvg