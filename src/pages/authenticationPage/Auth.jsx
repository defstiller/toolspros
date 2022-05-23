import React, {useState, useRef} from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";

function Auth() {
	const [isRegister, setIsRegister] = useState(true);
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
		event.preventDefault();
		const {email, password} = authInfo;
		if(isRegister) {
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

		} else {
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
				// Signed in 
					const user = userCredential.user;
				// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
				});
		}

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
			{isRegister ?
				<p>Sign up</p>
				:
				<p>Log in</p>
			}
			<form onSubmit={() => handleAuthWithEmail(window.event, authInfo)}>
				<input 
					placeholder="email" 
					name="email" 
					value={authInfo.email} 
					onChange={handleChange}/>
				<input 
					placeholder="password" 
					name="password" 
					type="password"
					value={authInfo.password} 
					onChange={handleChange}/>
				<button type="submit">Submit</button>
			</form>
			{isRegister ?
				<button onClick={() => setIsRegister(false)}>Already registered?</button>
				:
				<button onClick={() => setIsRegister(true)}>Register Instead</button>
			}
		</div>
	)

}

export default Auth;