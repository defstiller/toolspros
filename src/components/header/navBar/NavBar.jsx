import React from "react";

import classes from "./navBar.module.css";

function NavBar() {
	return(
		<ul className={classes.NavBar}>
			<li>
				Featured
			</li>

			<li>
				About
			</li>

			<li>
				Reviews
			</li>
			
			<li>
				Contact
			</li>
		</ul>
	);
}

export default NavBar;