import React from "react";
import PropTypes from "prop-types";

import styles from "./userMessage.module.css";
function UserMessage(props) {
	const {userMessage, removeData, loading} = props;
	const {email, name, subject, message, docId} = userMessage;
	return (
		<article className={styles.messageArticle}>
			<p>Email: {email}</p>
			<p>Name: {name}</p>
			<p>Subject: {subject}</p>
			<p>Message: {message}</p>
			<button onClick={() => removeData("messages", docId)} disabled={loading}>Remove message from data base</button>
		</article>
	)
}
UserMessage.propTypes = {
	userMessage: PropTypes.object,
	removeData: PropTypes.func,
	loading: PropTypes.bool,
	message: PropTypes.string,
	email: PropTypes.string,
	name: PropTypes.string,
	subject: PropTypes.string
};

export default UserMessage;