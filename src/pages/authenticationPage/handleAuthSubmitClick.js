import React from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
function handleAuthSubmitClick(
	event, 
	authInfo, 
	setIsLoading, 
	isRegister, 
	setResponse, 
	setError,
	auth) { 
		
	const {email, password} = authInfo;
	event.preventDefault();
	setIsLoading(true);
	if(isRegister) {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				setResponse("Succesfully created account, reddirecting to shop page.");
				// ...
			})
			.catch((error) => {
				setError(error);
				// ..
			})
			.finally(() => setIsLoading(false));
	}
					
	else {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				setResponse("Succesfully logged in, reddirecting to shop page.");

				// ...
			})
			.catch((error) => {
				setError(error);
			})
			.finally(() => setIsLoading(false));
	}
}
export default handleAuthSubmitClick;