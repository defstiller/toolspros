import React, { useEffect} from "react";
import PropTypes from "prop-types";
function Modal(props) {
	const {isModal, setIsModal} = props;
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsModal({
				isOpen: false,
				content: "",
				delay: 5000
			});
		}, isModal.delay);
		return () => clearTimeout(timer)
	}, [isModal]);

	if(isModal.isOpen) {
		return (
			<main>
				{isModal.content}
			</main>
		);
	}
}
Modal.propTypes = {
	props: PropTypes.any,
	isModal: PropTypes.object, 
	setIsModal: PropTypes.func
};

export default Modal;