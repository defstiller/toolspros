import React, {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";

import ProductCardSmall from "../../../../components/productCard/productCardSmall/ProductCardSmall";

import classes from "./productList.module.css";

function ProductList(props) {
	const {filteredData} = props;
	const [currentPage, setCurrentPage] = useState(1);
	const [currentProducts, setCurrentProducts] = useState([]);

	const nextButton = useRef();
	const previousButton = useRef();

	function handleNextPage() {
		setCurrentPage(currentPage + 1);
	}
	function handlePreviousPage() {
		setCurrentPage(currentPage - 1);
	}

	function productPagination() {
		previousButton.current.disabled = true;
		nextButton.current.disabled = true;
		const productsPerPage = 10;
		const firstPageIndex = (currentPage - 1) * productsPerPage;
		const lastPageIndex = firstPageIndex + productsPerPage;
		if(filteredData[firstPageIndex - 1]) {
			previousButton.current.disabled = false;
		}
		if(filteredData[lastPageIndex + 1]) {
			nextButton.current.disabled = false;
		}
		const newArray = filteredData.slice(firstPageIndex, lastPageIndex); // get {productsPerPage} elements depending on page number, page 1 = item 0 to {startingPoint + productsPerPage}, page 10 = item 50 to {startingPoint + productsPerPage};
		setCurrentProducts(newArray);
	}

	useEffect(() =>{
		productPagination();
	}, [currentPage, filteredData]);

	useEffect(() =>{ // set page to 1 when new data is received
		setCurrentPage(1);
	}, [filteredData]);

	return(
		<div className={classes.productDiv}>
			<main className={classes.productMain}>
				{currentProducts && currentProducts.map(product => {
					return <ProductCardSmall key={product.name} product={product}/>;
				})}
			</main>
			<button onClick={handlePreviousPage} ref={previousButton}>Previous</button>
			<button onClick={handleNextPage} ref={nextButton}>Next</button>
		</div>
	);
}
ProductList.propTypes = {
	filteredData: PropTypes.any
};
export default ProductList;