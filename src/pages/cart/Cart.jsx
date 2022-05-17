import React, {useState, useEffect, useContext} from "react";
import { useCart } from "react-use-cart";
import { useNavigate, Link} from "react-router-dom";

import HeaderLayout from "../../components/header/HeaderLayout";
import ProductCardWide from "../../components/productCard/productCardWide/ProductCardWide";

import {AuthContext} from "../../context/context";

import classes from "./cart.module.css";

function Cart() {
	const {isUser} = useContext(AuthContext); 

	const navigate = useNavigate();
	const {
		isEmpty,
		totalUniqueItems,
		items,
		updateItemQuantity,
		removeItem,
	} = useCart();
	const [summary, setSummary] = useState({
		subtotal: 0,
		shipping: 0,
		total: 0
	});
	useEffect(() => {
		let subtotal = 0;
		let total = 0;
		let shipping = 0;
		items.map( item => {
			const priceToNumber = parseInt(item.price);
			const shippingToNumber = parseInt(item.shipping);
			const totalWithQuantityAndShipping = priceToNumber * item.quantity + shippingToNumber; // one shipping per same item, no matter how many items
			subtotal = subtotal + totalWithQuantityAndShipping;
			shipping = shipping + shippingToNumber;
		});
		total = subtotal + shipping;
		setSummary({
			subtotal,
			shipping,
			total
		});
	},[items]);
	function handleQuantityChange(increase, product) {
		const currentQuantity = product.quantity;
		let newQuantity = null;
		if(increase) {
			newQuantity = currentQuantity + 1;
		} else {
			newQuantity = currentQuantity - 1;
		}
		updateItemQuantity(product.id, newQuantity);
	}
	function handleProductClick(product) { //navigate user on click
		const path = product.id;
		navigate(path);
	}
	
	if (isEmpty) return <>
		<HeaderLayout />
		<p>Your cart is empty</p>;
	</>;
	return <>
		<HeaderLayout />
		<div className={classes.cartMainDiv}>
			<main className={classes.main}>
				<h1>Shopping Cart ({totalUniqueItems})</h1>
				<ul>
					{items.map( product => (
						<li key={product.id}>
							<ProductCardWide 
								handleProductClick={handleProductClick} 
								handleQuantityChange={handleQuantityChange}
								product={product}
								removeItem={removeItem}
							/>
						</li>
					))}
				</ul>
			</main>
			<div className={classes.summaryDiv}>
				<h1>Summary</h1>
				<div>
					<p>Subtotal</p>
					<p>${summary.subtotal}</p>
				</div>
				<div>
					<p>Shipping</p>
					<p>{summary.shipping > 0 
						? "$" + summary.shipping 
						: "FREE"}</p>
				</div>
				<div className={classes.totalDiv}>
					<p>Total</p>
					<p>${summary.total}</p>
				</div>
			</div>
		</div>
		<button>Proceed To Checkout</button>
	</>;
}

export default Cart;