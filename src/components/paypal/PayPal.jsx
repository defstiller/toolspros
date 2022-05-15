import React, {useState, useRef, useEffect} from "react";
import PropTypes from "prop-types";
function PayPal(props) {
	const {subtotal, description} = props;
	const [paid, setPaid] = useState(false);
	const [error, setError] = useState(null);
	const payPalRef = useRef();
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
		return <div>Payment successful.!</div>;
	}
	
	// If any error occurs
	if (error) {
		return <div>Error Occurred in processing payment.! Please try again.</div>;
	}
	
	// Default Render
	return (
		<div>
			<h4>Total Amount in USD. : {subtotal}</h4>
			<div ref={payPalRef} />
		</div>
	)
}
PayPal.propTypes = {
	subtotal: PropTypes.any,
	description: PropTypes.any
};

export default PayPal;