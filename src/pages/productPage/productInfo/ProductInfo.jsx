import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import useAddGetData from "../../../logic/firebaseLogic/firebaseDB/useAddGetData";

import Header from "../../../components/header/Header";

function ProductInfo() {
	const params = useParams();
	const {loading, error, receivedData, getData} = useAddGetData();
	const [product, setProduct] = useState();
	useEffect(() => {
		getData("products");
	}, []);
	useEffect(() => {
		receivedData && receivedData.map(data => {
			if(data.id === params.id) {
				setProduct(data);
			}
			return;
		});
	},[receivedData]);
	return (
		<>
			<Header />
			<main>
				{product && <>
					<figure>
						<img src={product.imgUrl} />
					</figure>
					<h1>{product.name}</h1>
					<p>REVIEWS</p>
					<div>
						<p>${product.price}</p>
						<p>MODEL SELECT</p>
					</div>
					<p>{product.description}</p>
					<button>Add To Cart</button>
				</>}
			</main>

			<aside>
				<article>
					<p>REVIEW</p>
				</article>
			</aside>
		</>
	);
}

export default ProductInfo;