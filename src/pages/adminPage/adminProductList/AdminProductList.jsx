import React, {useEffect} from "react";

import useAddGetRemoveData from "../../../logic/firebaseLogic/firebaseDB/useAddGetRemoveData";

import ProductCard from "../../../components/productCard/productCardSmall/ProductCard";
import Modal from "../../../components/modal/Modal";
import LoadingModal from "../../../components/modal/loadingModal/LoadingModal";

import styles from "./adminProductList.module.css";

function GetProduct() {
	const {loading, error, receivedData, response, getData, removeData, setError, setResponse} = useAddGetRemoveData();

	useEffect(() => {
		getData("products");
	}, []);

	return(
		<div className={styles.getProductDiv}>
			<LoadingModal loading={loading}/>
			<Modal response={response} delay={2000} error={error} setResponse={setResponse} setError={setError}/>

			{receivedData && receivedData.map(product => {
				const Id = product.docId;
				return (
					<li key={product.id} className={styles.listItem}>
						<ProductCard product={product} styles={styles} loading={loading} >
							<p>DocID: {Id}</p>
							{product.default ? 
								<p>Default item, please find, or create non-default item for delete option</p>: //server side validation, don't waste your time.
								<button onClick={() => removeData("products", Id)} disabled={loading}>Remove item from data base</button>}
						</ProductCard>
					</li>
				);
			})}
			{loading && <p>Loading...</p>}
		</div>
	);
}

export default GetProduct;