import React from "react";
import {useNavigate} from "react-router-dom";

import classes from "./shopNowButton.module.css";

function ShopNowButton() {
	
	const navigate = useNavigate();

	function handleShopNowClick() {
		const newPath = "./shop";
		navigate(newPath);
	}

	return (
		<div className={classes.buttonDiv}>
			<button onClick={() => handleShopNowClick()}>
				Shop Now
			</button>
		</div>
	);

}

export default ShopNowButton;