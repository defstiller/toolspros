import React, {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import ProductCard from "../../../../components/productCard/productCardSmall/ProductCard";

import styles from "./productList.module.css";

function ProductList(props) {
	const {filteredData} = props;
	const [currentPage, setCurrentPage] = useState(1);
	const [currentProducts, setCurrentProducts] = useState([]);
	const navigate = useNavigate();

	const nextButton = useRef();
	const previousButton = useRef();

	function handlePageChangeClick(event) {
		const target = event.target;
		if(target === nextButton.current) {
			setCurrentPage(currentPage + 1);
		} else {
			setCurrentPage(currentPage - 1);
		}
	}

	/**
	 * Get the first and last index of the current page, then slice the array to get the products for that
	 * page.
	 */
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

	function handleProductClick(product) { //navigate user on click
		const path = product.id;
		navigate(path);
	}

	return(
		<div className={styles.productDiv}>
			<main className={styles.productMain}>
				<ul>
					{currentProducts && currentProducts.map(product => {
						return (
							<li key={product.id} className={styles.listItem}>
								<ProductCard 
									product={product} 
									handleProductClick={handleProductClick} 
									styles={styles}
								/>
							</li>);
					})}

				</ul>
			</main>
			<div className={styles.pageChangeBtns}>
				<button onClick={handlePageChangeClick} ref={previousButton}>Previous</button>
				<button onClick={handlePageChangeClick} ref={nextButton}>Next</button>
			</div>
		</div>
	);
}
ProductList.propTypes = {
	filteredData: PropTypes.any
};
export default ProductList;