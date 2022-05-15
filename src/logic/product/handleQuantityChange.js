function handleQuantityChange(increase, product, updateItemQuantity ) {
	const currentQuantity = product.quantity;
	let newQuantity = null;
	if(increase) {
		newQuantity = currentQuantity + 1;
	} else {
		newQuantity = currentQuantity - 1;
	}
	updateItemQuantity(product.id, newQuantity);
}

export default handleQuantityChange;