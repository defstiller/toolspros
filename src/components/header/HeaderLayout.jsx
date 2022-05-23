import React, {useContext, useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

import LogoSvg from "../../assets/svgsReactReady/logoSvg/LogoSvg";
import CartButtonSvg from "../../assets/svgsReactReady/cartButtonSvg/CartButtonSvg";
import HeaderMobile from "./headerMobile/NavBarMobile";
import AccountSvg from "../../assets/svgsReactReady/account/AccountSvg";
import NavBar from "./navBar/NavBar";
import DropDown from "./dropdown/DropDown";

import {ScreenResizeContext, AuthContext} from "../../context/context";

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
	}, [dropDown]);
	
	return <div className={styles.headerDiv}>
		<header className={styles.header}>
			<Link to="/" >
				<LogoSvg />
			</Link>
			<NavBar styles={styles}/>
			{/* { width > 768 
				?
				<NavBar styles={styles}/>
				:
				<HeaderMobile />
			} */}
			<Link to="/cart">
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
				<DropDown />
			</div>
		)}
	</div>;

}

export default HeaderLayout;