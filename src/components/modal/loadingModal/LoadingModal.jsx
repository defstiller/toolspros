import React from "react";
import PropTypes from "prop-types";
import LoadingSvg from "../../../assets/svgsReactReady/loading/LoadingSvg";

function LoadingModal(props) {
	const {loading} = props;
	if(loading) {
		return (
			<main>
				<LoadingSvg />
			</main>
		);
	}

}
LoadingModal.propTypes = {
	styles: PropTypes.any,
	loading: PropTypes.bool
};
export default LoadingModal;