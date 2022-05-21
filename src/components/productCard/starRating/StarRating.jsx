import React from "react";
import PropTypes from "prop-types";

import EmptyStarSvg from "../../../assets/svgsReactReady/stars/EmptyStarSvg";
import StarSvg from "../../../assets/svgsReactReady/stars/StarSvg";
function StarRating(props){
	const {rating, width} = props;
	const newArrayFilled = new Array(rating).fill(null);
	const emptyStars = 5 - rating;
	const newArrayEmpty = new Array(emptyStars).fill(null);

	return (
		<div>
			{newArrayFilled.map( () => {
				const key = Math.random()*100;
				return <StarSvg key={key} width={width}/>;
			})}
			{newArrayEmpty.map( () => {
				const key = Math.random()*100;
				return <EmptyStarSvg key={key} width={width}/>;
			})}
		</div>
	);
}
StarRating.propTypes = {
	rating: PropTypes.number,
	width: PropTypes.any
};

export default StarRating;