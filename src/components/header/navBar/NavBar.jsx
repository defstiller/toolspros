import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

import classes from "./navBar.module.css";

function NavBar(props) {
	const {styles} = props;
	return(
		<nav>
			<ul className={styles.NavBar}>
				<li>
					<NavLink to="/toolspros/shop">
						Shop
					</NavLink>
				</li>

				<li>
					<NavLink to="/toolspros/about">
						About
					</NavLink>
				</li>
				
				<li>
					<NavLink to="/toolspros/contact">
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
NavBar.propTypes = {
	styles: PropTypes.any
};
export default NavBar;