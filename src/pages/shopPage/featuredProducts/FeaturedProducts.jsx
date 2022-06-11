import React, {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import Carousel from "nuka-carousel";
import PropTypes from "prop-types";

import classes from "./featuredProducts.module.css";
import {ProductDataContext, ScreenResizeContext} from "../../../context/context";

function FeaturedProducts({data}) {
	const {receivedData, loading, error} = useContext(ProductDataContext);
	const {width} = useContext(ScreenResizeContext);
	const [featuredProducts, setFeaturedProducts] = useState([]);
	const [slides, setSlides] = useState(3);
	useEffect(() => {
		if(width < 800) {
			setSlides(1);
		} else if(width > 800) {
			setSlides(3);
		}
		return;

	}, [width]);
	/* Filtering the data to only show the featured products. */
	useEffect(() =>{
		if(!loading) {
			const featuredArray = [];
			receivedData.map(product => {
				if(product.isFeatured) {
					featuredArray.push(product);
					return;
				}
				return;
			});
			setFeaturedProducts(featuredArray);
		}
		return ;
	}, [receivedData]);
	return (
		<section className={classes.section}>
			<div className={classes.featuredTextDiv}>
				<h3>Featured Products</h3>
				<p>Aute cillum labore ipsum laboris velit irure sunt velit aliqua.</p>
			</div>

			<Carousel 
				className={classes.carousel}
				wrapAround={true}
				slidesToShow={slides}
				animation="zoom"
				autoplay={true}
				cellAlign="center"
				zoomScale={0.95}
				
			>
				{featuredProducts && featuredProducts.map(product => {
					return (
						<Link 
							to={product.id} 
							key={product.id}
						>
							<figure className={classes.figure}>
								<img src={product.imgUrl} />
								<figcaption>{product.name}</figcaption>
							</figure>
						</Link>);
				})}
			</Carousel>

		</section>
	);
}
FeaturedProducts.propTypes = {
	data: PropTypes.any
};

export default FeaturedProducts;