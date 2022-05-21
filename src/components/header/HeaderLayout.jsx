import React, {useContext, useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom";

import LogoSvg from "../../assets/svgsReactReady/logoSvg/LogoSvg";
import CartButtonSvg from "../../assets/svgsReactReady/cartButtonSvg/CartButtonSvg";
import HeaderMobile from "./headerMobile/NavBarMobile";
import AccountSvg from "../../assets/svgsReactReady/account/AccountSvg";
import NavBar from "./navBar/NavBar";

import {ScreenResizeContext} from "../../context/context";

import styles from "./header.module.css";

function HeaderLayout() {
	const {width} = useContext(ScreenResizeContext);
	const [dropDown, setDropdown] = useState(false);
	const dropDownDiv = useRef()
	useEffect(() => {
		if(dropDown ) {
			document.addEventListener("mouseup", function(event) {
				const div = dropDownDiv.current;
				if(div && !div.contains(event.target)){
					setDropdown(false);
				} 

				
			});
		}
		return;
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
				onMouseEnter={() => setDropdown(true)}
			/>
		</header>
		{dropDown && (
			<div 
				className={styles.dropDown} 
				ref={dropDownDiv} 
				style={{display: dropDown}}
				onMouseEnter={() => setDropdown(true)}
			>
				<p>Account</p>
				<p>Sign Out</p>
			</div>
		)}
	</div>;

}

export default HeaderLayout;