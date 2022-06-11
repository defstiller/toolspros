import React, {useState} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import Modal from "../../components/modal/Modal";
import LoadingModal from "../../components/modal/loadingModal/LoadingModal";
import HeaderLayout from "../../components/header/HeaderLayout";

import handleAuthSubmitClick from "./handleAuthSubmitClick";
import styles from "./auth.module.css";

function Auth() {
	const auth = getAuth();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [isRegister, setIsRegister] = useState(true);
	const [authInfo, setAuthInfo] = useState({
		email: "",
		password: ""
	});
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);

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
			const timer = setTimeout(() => {
				navigate("/shop");
			}, 2000);
			return () => clearTimeout(timer);
		
		// ...
		}
	});
	return <>
		<HeaderLayout />
		<main className={styles.main}>
			<LoadingModal loading={isLoading}/>
			<Modal 
				response={response}
				error={error}
				setResponse={setResponse}
				setError={setError}
				delay={5000}
			/>
			<div className={styles.formDiv}>
				{isRegister ?
					<h1>Sign up</h1>
					:
					<h1>Log in</h1>
				}
				<form className={styles.form}
					onSubmit={(event) => {
						handleAuthSubmitClick(event, authInfo, setIsLoading, isRegister, setResponse, setError, auth);
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
				<p>For admin account use <br/>email: admin@gmail.com <br/> password: easyAdmin123</p>
			</div>
		</main>
	</>


}

export default Auth;