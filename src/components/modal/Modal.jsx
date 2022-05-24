import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
function Modal(props) {
	const {delay, isModalOpen, setIsModalOpen} = props;
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsModalOpen(false);
		}, delay);
		return () => clearTimeout(timer)
	}, [isModalOpen]);
	
	if(isModalOpen) {
		return (
			<main>
				{props.children}
			</main>
		);
	}
}
Modal.propTypes = {
	props: PropTypes.any,
	children: PropTypes.any,
	delay: PropTypes.number,
	isModalOpen: PropTypes.bool, 
	setIsModalOpen: PropTypes.func
};

export default Modal;