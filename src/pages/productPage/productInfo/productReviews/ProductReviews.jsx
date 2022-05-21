import React, {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";

import StarRating from "../../../../components/productCard/starRating/StarRating";

import useAddGetData from "../../../../logic/firebaseLogic/firebaseDB/useAddGetData";
import useHandleInputChange from "../../../../logic/product/useHandleInputChange";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import classes from "./productReviews.module.css";
function ProductReviews(props) {
	const [userData, setUserData] = useState({
		userId: null,
		userEmail: null
	});
	useEffect(() => {
		const auth = getAuth();
		const user = auth.currentUser;
		const userId = user.uid;
		const userEmail = user.email;
		setUserData({
			userId,
			userEmail
		});
	}, []);
	const ratingsAndUids = useRef({
		userUidsArray: [],
		ratings: []
	});
	const {productDocId, setAverageRating} = props;
	const {loading, error,response ,receivedData, addData, getData} = useAddGetData();
	const {objectInput, input} = useHandleInputChange();
	const [reviews, setReviews] = useState(null);
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
			<article className={classes.reviewArticle}>
				<p>REVIEWS</p>
				{reviews && reviews.map(review => {
					return (
						<div key={review.id} className={classes.reviewDiv}>
							<div>
								<p>Commented by: {userData.userEmail}</p>
								<p>{review.dateReviewLeft}</p>
								<StarRating width="1em" rating={parseInt(review.rating, 10)}/>
							</div>
							<div className={classes.commentDiv}>
								<p>{review.comment}</p>
							</div>
						</div>
					);
				})}
			</article>
			{	// If review with userUid already exists will not render Leave a review
				ratingsAndUids.current.userUidsArray.includes(userData.userId) 
				|| 
				<aside>
					<p>Leave a review</p>
					<form onSubmit={handleReviewSubmit}>
						<input 
							placeholder="rating" 
							type="number" 
							min="1" max="5" 
							name="rating" 
							value={input.rating || ""} 
							onChange={objectInput}/>
						<input 
							placeholder="comment" 
							name="comment" 
							value={input.comment || ""} 
							onChange={objectInput}/>
						<button type="submit">
							Submit
						</button>
					</form>
				</aside>		
			}
		</div>
	);
}
ProductReviews.propTypes = {
	productDocId: PropTypes.string,
	setAverageRating: PropTypes.any
};

export default ProductReviews;