import React, {useState, useRef} from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

function Auth() {
	const [authInfo, setAuthInfo] = useState({
		email: "",
		password: ""
	});

	function handleChange(event) {
		const value = event.target.value;
		const name = event.target.name;
		setAuthInfo({
			...authInfo,
			[name]: value
		});
	}

	const auth = getAuth();
	function handleAuthWithEmail(event, authInfo) {
		event.preventDefault()
		const {email, password} = authInfo;
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
			// Signed in 
				const user = userCredential.user;
				console.log(user)
			// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			// ..
			});

	}
	onAuthStateChanged(auth, (user) => {
		if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
			const uid = user.uid;
			console.log(uid)
		// ...
		} else {
		// User is signed out
		// ...
		console.log("signed out")
		}
	});
	return (
		<div>
			<form onSubmit={() => handleAuthWithEmail(window.event, authInfo)}>
				<input placeholder="email" name="email" value={authInfo.email} onChange={handleChange}/>
				<input placeholder="password" name="password" value={authInfo.password} onChange={handleChange}/>
				<button type="submit">Submit</button>
			</form>
		</div>
	)

}

export default Auth;