import React, {useEffect} from "react";

import useAddGetRemoveData from "../../../logic/firebaseLogic/firebaseDB/useAddGetRemoveData";

import UserMessage from "./userMessage/UserMessage";

import LoadingModal from "../../../components/modal/loadingModal/LoadingModal";
import Modal from "../../../components/modal/Modal";


import styles from "./getUserMessages.module.css";
function GetUserMessages() {
	const {loading, error, receivedData, response, getData, setError, setResponse, removeData} = useAddGetRemoveData();


	useEffect(() => {
		getData("messages");
	}, []);
	return (
		<div className={styles.messagesDiv}>
			<LoadingModal loading={loading}/>
			<Modal response={response} delay={2000} error={error} setResponse={setResponse} setError={setError}/>
			{receivedData && receivedData.map(message => {
				return <UserMessage 
					key={message.docId}
					userMessage={message}
					removeData={removeData}
					loading={loading}
				/>;
			})}
		</div>
	);
}

export default GetUserMessages;