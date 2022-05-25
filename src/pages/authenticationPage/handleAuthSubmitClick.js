import React from "react";
import { 
	createUserWithEmailAndPassword, 
	signInWithEmailAndPassword
} from "firebase/auth";
function handleAuthSubmitClick(
	event, 
	authInfo, 
	setIsLoading, 
	isRegister, 
	setIsModal, 
	auth) { 
		
	const {email, password} = authInfo;
	event.preventDefault();
	setIsLoading(true);
	if(isRegister) {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				setIsModal({
					content: 
							<h1>Succesfully created account, reddirecting to shop page.</h1>, 
					isOpen: true, 
					delay: 5000});
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setIsModal({
					content: <>
						<h1>An error occured</h1>
						<p>{errorCode}</p>
						<p>{errorMessage}</p>
						<button onClick={() => setIsModal({})}>Close</button>
					</>,
					isOpen: true, 
					delay: 50000});
				// ..
			})
			.finally(() => setIsLoading(false));
	}
					
	else {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				setIsModal({
					content: 
							<h1>Succesfully logged in as {user}, reddirecting to shop page.</h1>, 
					isOpen: true, 
					delay: 5000});
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setIsModal({
					content: <>
						<h1>An error occured</h1>
						<p>{errorCode}</p>
						<p>{errorMessage}</p>
						<button onClick={() => setIsModal({})}>Close</button>
					</>,
					isOpen: true, 
					delay: 50000});
			})
			.finally(() => setIsLoading(false));
	}
}
export default handleAuthSubmitClick;