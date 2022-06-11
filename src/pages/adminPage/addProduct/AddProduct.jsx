import React, { useState } from "react";

import useAddGetRemoveData from "../../../logic/firebaseLogic/firebaseDB/useAddGetRemoveData";
import Modal from "../../../components/modal/Modal";
import LoadingModal from "../../../components/modal/loadingModal/LoadingModal";

import styles from "./addProduct.module.css";

function AddProduct() {

	const {loading, response, error, addData, setError, setResponse} = useAddGetRemoveData();
	const [input, setInput] = useState({
		name: "",
		description: "",
		category: "", ////// CREATE CATEGORY LIST 
		subCategory: "",
		isFeatured: false,
		price: "",
		shipping: "0",
		imgUrl: ""
	});
	function handleAddSubmit(event) {
		event.preventDefault();
		addData("products", input);
	}

	function handleInputChange(event) {
		const value = event.target.value;
		const name = event.target.name;
		setInput({
			...input,
			[name]:value
		});
	}

	return(
		<div className={styles.addProductDiv}>
			<Modal response={response} delay={2000} error={error} setResponse={setResponse} setError={setError}/>
			<LoadingModal loading={loading} />
			<form onSubmit={handleAddSubmit} className={styles.form}>
				<label htmlFor="name">Name</label>
				<input name="name" value={input.name} onChange={handleInputChange} required/> 

				<label htmlFor="description">Description</label>
				<input name="description" value={input.description} onChange={handleInputChange} required/>

				<label htmlFor="category">Category</label>
				<input name="category" value={input.category} onChange={handleInputChange} required/>

				<label htmlFor="category">sub-Category</label>
				<input name="subCategory" value={input.subCategory} onChange={handleInputChange}/>

				<label htmlFor="isFeatured">Is Featured?</label>
				<input name="isFeatured" value={input.isFeatured} type="checkBox" onChange={handleInputChange}/>

				<label htmlFor="price">Price</label>
				<input name="price" value={input.price} onChange={handleInputChange} required/>

				<label htmlFor="shipping">Shipping Price</label>
				<input name="shipping" value={input.shipping} onChange={handleInputChange} required/>

				<label htmlFor="imgUrl">Image URL</label>
				<input name="imgUrl" value={input.imgUrl} onChange={handleInputChange} required/>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default AddProduct;