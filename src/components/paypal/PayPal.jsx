import React, {useState, useRef, useEffect} from "react";
import PropTypes from "prop-types";
import { useCart } from "react-use-cart";
function PayPal(props) {
	const {subtotal, description, styles} = props;
	const [paid, setPaid] = useState(false);
	const [error, setError] = useState(null);
	const payPalRef = useRef();
	const { emptyCart } = useCart();
	useEffect(() => {
		if(subtotal && description) {
			window.paypal
				.Buttons({
					createOrder: (data, actions) => {
						return actions.order.create({
							intent: "CAPTURE",
							purchase_units: [
								{
									description: description,
									amount: {
										currency_code: "USD",
										value: subtotal,
									},
								},
							],
						});
					},
					onApprove: async (data, actions) => {
						const order = await actions.order.capture();
						setPaid(true);
						console.log(order);
					},
					onError: (err) => {
					//   setError(err),
						console.error(err);
					},
				})
				.render(payPalRef.current);
		}
	}, [subtotal, description]);

	if (paid) {
		emptyCart();
		return <div>Payment successful.!</div>;
	}
	
	// If any error occurs
	if (error) {
		return <div>Error Occurred in processing payment.! Please try again.</div>;
	}
	
	// Default Render
	return (
		<div className={styles.totalDiv}>
			<section>
				<h4>Total Amount in USD. : {subtotal}</h4>
				<div ref={payPalRef} />
			</section>
		</div>
	)
}
PayPal.propTypes = {
	subtotal: PropTypes.any,
	description: PropTypes.any,
	styles: PropTypes.any
};

export default PayPal;