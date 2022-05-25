import React, {useState} from "react";
import PropTypes from "prop-types";
import LoadingSvg from "../../../assets/svgsReactReady/loading/LoadingSvg";

function LoadingModal(props) {
	const {styles, isLoading} = props;
	if(isLoading) {
		return (
			<main className={styles.loader}>
				<LoadingSvg />;
			</main>
		);
	}

}
LoadingModal.propTypes = {
	styles: PropTypes.any,
	isLoading: PropTypes.bool
};
export default LoadingModal;