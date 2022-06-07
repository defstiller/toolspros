import React, {useState, useEffect} from "react";

import HeaderLayout from "../../components/header/HeaderLayout";
import Modal from "../../components/modal/Modal";

import useAddGetRemoveData from "../../logic/firebaseLogic/firebaseDB/useAddGetRemoveData";
import useHandleInputChange from "../../logic/functions/useHandleInputChange";

import styles from "./contactPage.module.css";

function ContactPage() {
	const {objectInput, input} = useHandleInputChange();
	const {loading, error, response, addData} = useAddGetRemoveData();
	const [isModal, setIsModal] = useState({});
	function handleSubmit(event) {
		event.preventDefault();
		addData("messages", input);
	}

	useEffect(() => {
		if(response) {
			setIsModal({
				isOpen: true,
				content: <p>{response}</p>,
				delay: 5000
			});
		} else if(error) {
			const errorMessage = error.message;
			setIsModal({
				isOpen: true,
				content: <p>{errorMessage}</p>,
				delay: 15000
			});
		}
		return;
	}, [error, response]);
	return (
		<>
			<HeaderLayout />
			{isModal.isOpen && <Modal 
				isModal={isModal} 
				setIsModal={setIsModal}
				styles={styles}/>}
			<main className={styles.main}>
				<h1>Would you like to contact us?</h1>
				<p>This form is for messages in admin section</p>
				<form disabled={loading} onSubmit={handleSubmit}>
					<input placeholder="email" type="text" onChange={objectInput} name="email" required/>
					<input placeholder="name" type="text" onChange={objectInput} name="name" required/>
					<input placeholder="subject" type="text" onChange={objectInput} name="subject" required/>
					<textarea placeholder="Message" type="text" onChange={objectInput} name="message" required/>
					<button type="submit">Submit</button>
				</form>
			</main>
		</>
	);
}

export default ContactPage;