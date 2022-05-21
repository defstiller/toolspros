import React from "react";
import PropTypes from "prop-types";

const AccountSvg = (props) => {
	const {styles} = props;
	return (
		<button className={styles.svgButton}>
			<svg className={styles.svgIcon} viewBox="0 0 20 20" {...props}>
				<path d="M12.075 10.812c1.358-.853 2.242-2.507 2.242-4.037 0-2.181-1.795-4.618-4.198-4.618S5.921 4.594 5.921 6.775c0 1.53.884 3.185 2.242 4.037-3.222.865-5.6 3.807-5.6 7.298 0 .23.189.42.42.42h14.273c.23 0 .42-.189.42-.42 0-3.491-2.379-6.433-5.601-7.298M6.761 6.775c0-2.162 1.773-3.778 3.358-3.778s3.359 1.616 3.359 3.778-1.774 3.778-3.359 3.778-3.358-1.616-3.358-3.778M3.415 17.69c.218-3.51 3.142-6.297 6.704-6.297s6.486 2.787 6.705 6.297H3.415z" />
			</svg>
		</button>
	);
};
AccountSvg.propTypes = {
	styles: PropTypes.any
};
export default AccountSvg;
