import React, {useState, useEffect, useContext} from "react";
import { useCart } from "react-use-cart";

import {AuthContext} from "../../context/context";

import PayPal from "../../components/paypal/PayPal";

import styles from "./checkoutPage.module.css";

function CheckoutPage() {
	const {isUser} = useContext(AuthContext);
	const { items } = useCart();
	const [subtotal, setSubTotal] = useState(0);

	const initialOptions = {
		"client-id": "Afp8TCWSmhfuz4HD-Ba4V6Qr3Sizb6yYr6gahuKwRr3SBJAhFc2NGe8Or_J0No4xit4ncVL0xY9zj-DS",
		currency: "USD",
		intent: "capture",
		"data-client-token": "abc123xyz==",
	};
	useEffect(() => {
		let total = 0;
		items.map( item => {
			const priceToNumber = parseInt(item.price);
			const totalWithQuantity = priceToNumber * item.quantity;
			total = total + totalWithQuantity;
		});
		setSubTotal(total);
	},[items]);
	return <main>
		<h1>Checkout</h1>

		<ul className={styles.list}>
			{items.map( product => (
				<li key={product.id}>
					<p>{product.name} x{product.quantity}</p>
					<p>Price: ${product.price}</p>
					<p>Shipping: ${product.shipping}</p>
				</li>
			))}
		</ul>
		<PayPal subtotal={subtotal} description="Order from ToolsPros" styles={styles}/>
	</main>;
}

export default CheckoutPage;