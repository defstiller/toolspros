import React from "react";
import PropTypes from "prop-types";

import styles from "./review.module.css";
function Review(props) {
	const {review, removeData, loading} = props;
	const {leftByEmail, comment, dateReviewLeft, rating, docId} = review;
	return (
		<article className={styles.reviewArticle}>
			<p>Email: {leftByEmail}</p>
			<p>Comment: {comment}</p>
			<p>Date: {dateReviewLeft}</p>
			<p>Rating: {rating}</p>
			<p>DocID: {docId}</p>
			<button onClick={() => removeData("reviews", docId)} disabled={loading}>Remove review from data base</button>
		</article>
	);
}
Review.propTypes = {
	review: PropTypes.object,
	removeData: PropTypes.func,
	loading: PropTypes.bool,
};

export default Review;