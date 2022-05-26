import React from "react";
import PropTypes from "prop-types";
function ReviewForm(props) {
	const {handleReviewSubmit, input, objectInput,userData, ratingsAndUids, styles} = props;
	// If review with userUid already exists will not render Leave a review
	if(!ratingsAndUids.current.userUidsArray.includes(userData.userId)) {
		return (
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
		);
}
}
ReviewForm.propTypes = {
	handleReviewSubmit: PropTypes.any,
	input: PropTypes.any,
	objectInput: PropTypes.any,
	styles: PropTypes.any,
	ratingsAndUids: PropTypes.any,
	userData: PropTypes.any
};

export default ReviewForm;