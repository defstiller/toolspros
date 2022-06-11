import {useState} from "react";

import {getDocs, collection, addDoc, doc, deleteDoc} from "firebase/firestore/lite";
import {db} from "../firebaseConfig";
import { v4 as uuidv4 } from 'uuid';

function useAddGetRemoveData() {
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState();
	const [error, setError] = useState(false);
	const [receivedData, setReceivedData] = useState([]);
	/**
 * It takes a collection name and data to post, sets the loading state to true, tries to add the data
 * to the collection, sets the response state to the response message, and finally sets the loading
 * state to false.
 * 
 * If an error occurs, it sets the error state to the error message.
 * The `
 * @param dbCollection - The name of the collection you want to add data to. --> ReactProjectDb > collection > document > document object key / value pairs.
 * @param dataToPost - The data to be posted to the database.
 */
	async function addData(dbCollection, dataToPost) {
		setLoading(true);
		try {
			const dataToWrite = collection(db, dbCollection);
			const newUuid = uuidv4();
			const dataToPostWithUuid = { // add unique id to posted data
				...dataToPost,
				id: newUuid
			};
			const fetchResponse = await addDoc(dataToWrite, dataToPostWithUuid);
			const responseMessage = "Data added with ID: " + fetchResponse.id;
			setResponse(responseMessage);
		} catch (err) {
			setError(err);
			console.log(err);
		} finally {
			setLoading(false);
		}
	}
	async function getData(dbCollection) {
		try {
			setLoading(true);
			const responseData = collection(db, dbCollection);
			const data = await getDocs(responseData);
			const dataSeparated = data.docs.map(doc => {
				const data = doc.data();
				const docId = doc.id;
				const combinedData = {
					...data,
					docId
				};
				return combinedData;
			});
			setReceivedData(dataSeparated);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	}
	async function removeData(dbCollection, Id) {
		try {
			setLoading(true);
			await deleteDoc(doc(db, dbCollection, Id));
			setResponse("Item deleted, reloading list");
			getData(dbCollection);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	}
	return {loading, response, error, receivedData, addData, getData, removeData, setError, setResponse};
}


export default useAddGetRemoveData;