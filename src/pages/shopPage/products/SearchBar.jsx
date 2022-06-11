import React, {useState, useContext, useDeferredValue, useMemo} from "react";

import classes from "./searchBar.module.css";
import {ProductDataContext} from "../../../context/context";

import ProductList from "./productList/ProductList";
import LoadingModal from "../../../components/modal/loadingModal/LoadingModal";

function SearchBar() {
	const {receivedData, loading, error} = useContext(ProductDataContext);
	const [input, setInput] = useState("");
	const defferedInput = useDeferredValue(input);
	const [filteredData, setFilteredData] = useState([]);

	function handleInputChange(event) {
		const value = event.target.value;
		setInput(value);
	}
	
	/* Filtering the data based on the input. receivedData dependancy is used to update on first render */
	useMemo(() => {
		if(defferedInput) {
			let filteredArray = [];
			receivedData.map( data => {
				const lowerInput = defferedInput.toLowerCase();
				const name = data.name.toLowerCase();
				if(name.includes(lowerInput)){
					filteredArray.push(data);
				}
				return;
			});
			setFilteredData(filteredArray);
		} else {
			setFilteredData(receivedData);
		}
	}, [defferedInput, receivedData]);

	return(
		<div className={classes.searchBarDiv}>
			<LoadingModal loading={loading} />
			<h1>Best products on the market</h1>
			<form>
				<input type="search" placeholder="Search..." value={input} onChange={handleInputChange}/>
			</form>
			<div className={classes.productDiv}>
				<ProductList filteredData={filteredData}/>
			</div>
		</div>
	);
}

export default SearchBar;