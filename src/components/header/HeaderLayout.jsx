import React from "react";
import {Link} from "react-router-dom";

import LogoSvg from "../../assets/svgsReactReady/logoSvg/LogoSvg";
import CartButtonSvg from "./cartButtonSvg/CartButtonSvg";
import NavBar from "./navBar/NavBar";

import classes from "./header.module.css";

function HeaderLayout() {

	return (
		<header className={classes.header}>
			<Link to="/" >
				<LogoSvg />
			</Link>
			<NavBar />
			<Link to="/cart">
				<CartButtonSvg />
			</Link>
		</header>
	);
}

export default HeaderLayout;