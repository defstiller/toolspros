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

import handleAuthSubmitClick from "./handleAuthSubmitClick";
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
		<main className={styles.main}>
			<LoadingModal styles={styles} isLoading={isLoading}/>
			{isModal.isOpen && <Modal 
				isModal={isModal} 
				setIsModal={setIsModal}
				styles={styles}
			/>}
			<div className={styles.formDiv}>

				{isRegister ?
					<p>Sign up</p>
					:
					<p>Log in</p>
				}
				<form className={styles.form}
					onSubmit={(event) => {
						handleAuthSubmitClick(event, authInfo, setIsLoading, isRegister, setIsModal, auth);
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
				</form >
				{isRegister ?
					<button onClick={() => setIsRegister(false)}>Already registered?</button>
					:
					<button onClick={() => setIsRegister(true)}>Register Instead</button>
				}
			</div>
		</main>
	)

}

export default Auth;