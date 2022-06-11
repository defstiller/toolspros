import React, {useContext} from "react";

import {AuthContext} from "../../context/context";

function AccountPage() {
	const {isUser} = useContext(AuthContext); 
	console.log(isUser);
	return(
		<h1>Hello {isUser.displayName || "friend"}!</h1>
	);
}

export default AccountPage;