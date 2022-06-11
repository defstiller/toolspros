import React, {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";

import StarRating from "../../../../components/productCard/starRating/StarRating";
import ReviewForm from "./reviewForm/ReviewForm";
import LoadingModal from "../../../../components/modal/loadingModal/LoadingModal";

import useAddGetRemoveData from "../../../../logic/firebaseLogic/firebaseDB/useAddGetRemoveData";
import useHandleInputChange from "../../../../logic/functions/useHandleInputChange";

import { getAuth } from "firebase/auth";

import styles from "./productReviews.module.css";
function ProductReviews(props) {
	const [userData, setUserData] = useState({
		userId: null,
		userEmail: null
	});
	const auth = getAuth();
	const user = auth.currentUser;
	useEffect(() => {
		if(user) {
			const userId = user.uid;
			const userEmail = user.email;
			setUserData({
				userId,
				userEmail
			});
		}
	}, []);
	const ratingsAndUids = useRef({
		userUidsArray: [],
		ratings: []
	});
	const {productDocId, setAverageRating} = props;
	const {loading, error,response ,receivedData, addData, getData} = useAddGetRemoveData();
	const {objectInput, input} = useHandleInputChange();
	const [reviews, setReviews] = useState([]);
	function handleReviewSubmit(event) {
		event.preventDefault();
		const reviewsDataIdLength = receivedData.length + 1;
		const currentDate = new Date();
		const options = { year: "numeric", month: "long", day: "numeric" };
		const currentDateToPost = currentDate.toLocaleDateString("en-us",options);
		const dataToPost = {
			comment: input.comment,
			rating: input.rating,
			productDocId: productDocId,
			id: reviewsDataIdLength,
			leftByUid: userData.userId,
			leftByEmail: userData.userEmail,
			dateReviewLeft: currentDateToPost
		};
		addData("reviews", dataToPost);
	}
	useEffect(() => { 
		getData("reviews");
	}, [response]);
	useEffect(() => { // handle reviews
		if(receivedData) {
			const productReviews = [];
			const productRatings = []; // for average rating
			receivedData.map(data => { //data received will include docId, which is id of comment, not product it is assigned to
				if(data.productDocId === productDocId) {
					productRatings.push(parseInt(data.rating, 10));
					productReviews.push(data);
					ratingsAndUids.current.userUidsArray.push(data.leftByUid);
				}
				return;
			});
			setReviews(productReviews);
			if(productRatings.length > 0) {
				let average = null;
				average = productRatings.reduce((previous, current) => {
					return previous + current;
				});
				average = Math.ceil(average / productRatings.length);
				setAverageRating(average);
			}
		}
	}, [receivedData]);
	return (
		<div>
			<LoadingModal loading={loading} />
			<article className={styles.reviewArticle}>
				{reviews.length ? <p>REVIEWS</p> : <p>No reviews found</p>}
				{reviews && reviews.map(review => {
					return (
						<div key={review.id} className={styles.reviewDiv}>
							<div>
								<p>Commented by: {review.leftByEmail}</p>
								<p>{review.dateReviewLeft}</p>
								<StarRating width="1em" rating={parseInt(review.rating, 10)}/>
							</div>
							<div className={styles.commentDiv}>
								<p>{review.comment}</p>
							</div>
						</div>
					);
				})
				}
			</article>
			{user && 
			<ReviewForm 
				handleReviewSubmit={handleReviewSubmit} 
				input={input} 
				objectInput={objectInput} 
				ratingsAndUids={ratingsAndUids}	
				userData={userData}
				styles={styles}
			/>}
		</div>
	);
}
ProductReviews.propTypes = {
	productDocId: PropTypes.string,
	setAverageRating: PropTypes.any
};

export default ProductReviews;