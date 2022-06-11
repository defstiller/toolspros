import React, { useContext } from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { signOut } from "firebase/auth";

import { AuthContext, ScreenResizeContext } from "../../../context/context";
import NavBar from "../navBar/NavBar";

import styles from "./dropDown.module.css";

function DropDown() {
	const {auth, isUser} = useContext(AuthContext);
	const {width} = useContext(ScreenResizeContext);
	function handleSignOut() {
		signOut(auth).then(() => {
			// Sign-out successful.
			console.log("signed out");
		}).catch((error) => {
			// An error happened.
			console.log(error);
		});
	}
	return (
		<>
			{width < 575 && <NavBar styles={styles}/>}
			<Link to="/toolspros/admin">
				<button>Admin Page</button>
			</Link>
			{isUser 
				? <button onClick={() =>  handleSignOut()}
				>Sign Out</button>
				:
				<Link to="/toolspros/auth">
					<button>Sign in</button>
				</Link>
			}
		</>
	);
}
DropDown.propTypes = {
	styles: PropTypes.any,
	dropDown: PropTypes.any,
	isUser: PropTypes.any
};

export default DropDown;