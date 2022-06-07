import React, { useRef, useContext} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { getAuth, signOut } from "firebase/auth";

import { AuthContext } from "../../../context/context";

function DropDown() {
	const {auth, isUser} = useContext(AuthContext);
	function handleSignOut() {
		signOut(auth).then(() => {
			// Sign-out successful.
			console.log("signed out")
		}).catch((error) => {
			// An error happened.
			console.log(error)
		});
	}
	return (
		<>
			<Link to="/admin">
				<button>Admin Page</button>
			</Link>
			{isUser 
				? <button onClick={() =>  handleSignOut()}
				>Sign Out</button>
				:
				<Link to="/auth">
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