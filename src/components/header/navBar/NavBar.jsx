import React from "react";

import classes from "./navBar.module.css";

function NavBar() {
	return(
		<nav>
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
		</nav>
	);
}

export default NavBar;