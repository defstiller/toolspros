import {getFirestore} from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyCk-fXi46NHIIym21R6Og8IVZkksj7ZEO0",
	authDomain: "react-ef8b3.firebaseapp.com",
	projectId: "react-ef8b3",
	storageBucket: "react-ef8b3.appspot.com",
	messagingSenderId: "414747320378",
	appId: "1:414747320378:web:ae80ac4ababff9dda7d503",
	measurementId: "G-1VWQW4FWMP",
};

// Initialize Firebase
const main = initializeApp(firebaseConfig);
const db = getFirestore(main);

export default db;