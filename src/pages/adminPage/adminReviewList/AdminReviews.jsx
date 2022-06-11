import React, {useEffect} from "react";

import useAddGetRemoveData from "../../../logic/firebaseLogic/firebaseDB/useAddGetRemoveData";

import LoadingModal from "../../../components/modal/loadingModal/LoadingModal";
import Modal from "../../../components/modal/Modal";
import Review from "./review/Review";

import styles from "./adminReviews.module.css";
function AdminReviewList() {
	const {loading, error, receivedData, response, getData, setError, setResponse, removeData} = useAddGetRemoveData();


	useEffect(() => {
		getData("reviews");
	}, []);
	return (
		<div className={styles.reviewsDiv}>
			<LoadingModal loading={loading}/>
			<Modal response={response} delay={2000} error={error} setResponse={setResponse} setError={setError}/>
			{receivedData && receivedData.map(review => {
				return <Review 
					key={review.docId}
					review={review}
					removeData={removeData}
					loading={loading}
				/>;
			})}
		</div>
	);
}

export default AdminReviewList;