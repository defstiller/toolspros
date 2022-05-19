import React from "react";
import styles from "../defaultStyles.module.css";

const Lines = (props) => (
	<svg className={styles.svgIcon} viewBox="0 0 20 20" {...props}>
		<path
			fill="none"
			d="M3.314 4.8h13.372a.743.743 0 0 0 0-1.486H3.314a.743.743 0 0 0 0 1.486zm13.372 10.4H3.314a.743.743 0 0 0 0 1.486h13.372a.743.743 0 0 0 0-1.486zm0-5.943H3.314a.743.743 0 0 0 0 1.486h13.372a.743.743 0 0 0 0-1.486z"
		/>
	</svg>
);

export default Lines;