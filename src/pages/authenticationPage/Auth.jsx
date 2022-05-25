import React, {useState, useEffect} from "react";
import { 
	getAuth, 
	createUserWithEmailAndPassword, 
	onAuthStateChanged, 
	signInWithEmailAndPassword
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import Modal from "../../components/modal/Modal";
import LoadingModal from "../../components/modal/loadingModal/LoadingModal";

import styles from "./auth.module.css";

function Auth() {
	const auth = getAuth();
	const navigate = useNavigate();
	const [isModal, setIsModal] = useState({});
	const [isLoading, setIsLoading] = useState(false);
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
	function handleSubmitClick(event) { 
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
	
	onAuthStateChanged(auth, (user) => {
		if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
			// const uid = user.uid;
			navigate("/shop");
		// ...
		}
	});
	return (
		<main>
			<LoadingModal styles={styles} isLoading={isLoading}/>
			{isModal.isOpen && <Modal 
				isModal={isModal} 
				setIsModal={setIsModal}
				styles={styles}
			/>}
			{isRegister ?
				<p>Sign up</p>
				:
				<p>Log in</p>
			}
			<form onSubmit={(event) => {
				handleSubmitClick(event)
			}}>
				<input 
					placeholder="email" 
					name="email" 
					value={authInfo.email} 
					autoComplete="username"
					onChange={handleChange}/>
				<input 
					placeholder="password" 
					name="password" 
					type="password"
					value={authInfo.password} 
					autoComplete="current-password"
					onChange={handleChange}/>
				<button type="submit" disabled={isLoading}>Submit</button>
			</form>
			{isRegister ?
				<button onClick={() => setIsRegister(false)}>Already registered?</button>
				:
				<button onClick={() => setIsRegister(true)}>Register Instead</button>
			}
		</main>
	)

}

export default Auth;