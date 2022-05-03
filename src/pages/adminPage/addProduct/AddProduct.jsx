import React, { useState } from "react";

import useAddGetData from "../../../logic/firebaseLogic/firebaseDB/useAddGetData";

function AddProduct() {

	const {loading, response, error, addData} = useAddGetData();
	const [input, setInput] = useState({
		name: "",
		description: "",
		category: "", ////// CREATE CATEGORY LIST 
		isFeatured: false,
		price: "",
		shipping: "",
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
		<div>
			{error && <p>error</p>}
			{response && <p>{response}</p>}
			{loading && <p>Loading...</p>}
			<form onSubmit={handleAddSubmit}>
				<label htmlFor="name">Name</label>
				<input name="name" value={input.name} onChange={handleInputChange}/> 

				<label htmlFor="description">Description</label>
				<input name="description" value={input.description} onChange={handleInputChange}/>

				<label htmlFor="category">Category</label>
				<input name="category" value={input.category} onChange={handleInputChange}/>

				<label htmlFor="isFeatured">Is Featured?</label>
				<input name="isFeatured" value={input.isFeatured} type="checkBox" onChange={handleInputChange}/>

				<label htmlFor="price">Price</label>
				<input name="price" value={input.price} onChange={handleInputChange}/>

				<label htmlFor="shipping">Shipping Price</label>
				<input name="shipping" value={input.shipping} onChange={handleInputChange}/>

				<label htmlFor="imgUrl">Image URL</label>
				<input name="imgUrl" value={input.imgUrl} onChange={handleInputChange}/>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default AddProduct;