import {useState} from "react";

import {getDocs, collection, addDoc} from "firebase/firestore/lite";
import db from "../firebeseConfig";

function useAddGetData() { // dbCollection is name of DB array of objects. --> ReactProject > collection > document > document object key / value pairs.
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
 * @param dbCollection - The name of the collection you want to add data to.
 * @param dataToPost - The data to be posted to the database.
 */
	async function addData(dbCollection, dataToPost) {
		setLoading(true);
		try {
			const dataToWrite = collection(db, dbCollection);
			const fetchResponse = await addDoc(dataToWrite, dataToPost);
			const responseMessage = "Product added with ID: " + fetchResponse.id;
			setResponse(responseMessage);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	}
	async function getData(dbCollection) {
		try {
			setLoading(true);
			const response = collection(db, dbCollection);
			const data = await getDocs(response);
			const dataSeparated = data.docs.map(doc => doc.data());
			setReceivedData(dataSeparated);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	}
	return {loading, response, error, receivedData, addData, getData};
}


export default useAddGetData;