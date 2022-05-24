import React, { useEffect} from "react";
import PropTypes from "prop-types";
function Modal(props) {
	const {isModal, setIsModal, styles} = props;
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsModal({ // use as template for parent
				isOpen: false,
				content: "",
				delay: 0
			});
		}, isModal.delay);
		return () => clearTimeout(timer);
	}, [isModal]);

	if(isModal.isOpen) {
		return (
			<main className={styles.modal}>
				<div>
					{isModal.content}
				</div>
			</main>
		);
	}
}
Modal.propTypes = {
	props: PropTypes.any,
	isModal: PropTypes.object, 
	setIsModal: PropTypes.func,
	styles: PropTypes.any
};

export default Modal;