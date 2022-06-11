import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import useAddGetRemoveData from "../../../logic/firebaseLogic/firebaseDB/useAddGetRemoveData";
import HeaderLayout from "../../../components/header/HeaderLayout";
import ProductReviews from "./productReviews/ProductReviews";
import AddToCart from "../../../components/addToCart/AddToCart";
import ImageWithFallback from "../../../components/imageWithFallback/ImageWithFallback";
import LoadingModal from "../../../components/modal/loadingModal/LoadingModal";

import styles from "./productInfo.module.css";
import StarRating from "../../../components/productCard/starRating/StarRating";

function ProductInfo() {
	const params = useParams();
	const {loading, error, response, receivedData, addData, getData} = useAddGetRemoveData();
	const [product, setProduct] = useState();
	const [averageRating, setAverageRating] = useState(0);
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
			<HeaderLayout />
			<LoadingModal loading={loading} />
			{product && <>
				<main className={styles.main}>
					<figure>
						<ImageWithFallback src={product.imgUrl} />
					</figure>
					<div>
						<h1>{product.name}</h1>
						<StarRating width="1em" rating={averageRating}/>
						<p className={styles.price}>${product.price}</p>
						<p className={styles.description}>{product.description}</p>
						<AddToCart product={product} styles={styles}/>
					</div>
				</main>
				<section>
					<ProductReviews productDocId={product.docId} setAverageRating={setAverageRating} />
				</section>
			</>}
		</>
	);
}

export default ProductInfo;