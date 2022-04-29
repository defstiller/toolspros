import React from "react";

import LogoSvg from "./logoSvg/LogoSvg";
import CartButtonSvg from "./cartButtonSvg/CartButtonSvg";
import NavBar from "./navBar/NavBar";

import classes from "./header.module.css"

function HeaderLayout() {

	return (
		<header className={classes.header}>
			<LogoSvg />
			<NavBar />
			<CartButtonSvg />
		</header>
	);
}

export default HeaderLayout;