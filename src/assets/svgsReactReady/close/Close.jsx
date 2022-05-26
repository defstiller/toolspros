import React from "react";
import styles from "../defaultStyles.module.css";

const Close = (props) => (
	<svg className={styles.svgIcon} viewBox="0 0 20 20" {...props}>
		<path
			fill="none"
			d="M15.898 4.045a.698.698 0 0 0-.986 0l-4.71 4.711-4.709-4.711a.698.698 0 0 0-.986.986l4.709 4.711-4.71 4.711a.698.698 0 0 0 .985.986l4.711-4.711 4.71 4.711a.695.695 0 0 0 .494.203.694.694 0 0 0 .492-1.189l-4.711-4.711 4.711-4.711a.694.694 0 0 0 0-.986z"
		/>
	</svg>
);

export default Close;