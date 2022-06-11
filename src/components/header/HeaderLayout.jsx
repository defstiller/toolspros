import React, {useContext, useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom";

import LogoSvg from "../../assets/svgsReactReady/logoSvg/LogoSvg";
import CartButtonSvg from "../../assets/svgsReactReady/cartButtonSvg/CartButtonSvg";
import AccountSvg from "../../assets/svgsReactReady/account/AccountSvg";
import NavBar from "./navBar/NavBar";
import DropDown from "./dropdown/DropDown";

import {ScreenResizeContext} from "../../context/context";

import styles from "./header.module.css";

function HeaderLayout() {
	const {width} = useContext(ScreenResizeContext);
	const [dropDown, setDropdown] = useState(false);
	const dropDownDiv = useRef();
	useEffect(() => {
		if(dropDown) {
			const div = dropDownDiv.current;
			document.addEventListener("mouseup", function hideDropDown(event) {
				if(div && !div.contains(event.target)){
					setDropdown(false);
				} 
				return document.removeEventListener("mouseup", hideDropDown);			
			});
		}
		return;
	}, [dropDown]);
	
	return <div className={styles.headerDiv}>
		<header className={styles.header}>
			<Link to="/toolspros/" >
				<LogoSvg />
			</Link>
			{width > 575 && <NavBar styles={styles}/>}
			<Link to="/toolspros/cart">
				<CartButtonSvg styles={styles}/>
			</Link>
			<AccountSvg 
				styles={styles} 
				onClick={() => setDropdown(true)}
			/>
		</header>
		{dropDown && (
			<div 
				className={styles.dropDown}  
				ref={dropDownDiv} 
			>
				<DropDown width={width}/>
			</div>
		)}
	</div>;

}

export default HeaderLayout;