import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./navBar.module.css";

function NavBar() {
	return(
		<nav>
			<ul className={classes.NavBar}>
				<li>
					<NavLink to="/">
						Featured
					</NavLink>
				</li>

				<li>
					<NavLink to="/about">
						About
					</NavLink>
				</li>

				<li>
					<NavLink to="/reviews">
						Reviews
					</NavLink>
				</li>
				
				<li>
					<NavLink to="/contact">
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;