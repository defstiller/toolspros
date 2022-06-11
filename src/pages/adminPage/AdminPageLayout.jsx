import React, {useState} from "react";

import AdminProductList from "./adminProductList/AdminProductList";
import AddProduct from "./addProduct/AddProduct";
import GetUserMessages from "./getUserMessages/GetUserMessages";
import HeaderLayout from "../../components/header/HeaderLayout";

import styles from "./adminPageLayout.module.css";
function AdminPageLayout() {
	const [adminPage, setAdminPage] = useState("none");
	function handleAdminPageLayout(event) {
		setAdminPage(event.target.name);
	}
	return (<>
		<HeaderLayout />
		<section className={styles.adminSection}>
			<button onClick={event => handleAdminPageLayout(event)} name="addProduct">Add Product</button>
			<button onClick={event => handleAdminPageLayout(event)} name="productList">Product list</button>
			<button onClick={event => handleAdminPageLayout(event)} name="userMessages">User messages</button>
			<button onClick={event => handleAdminPageLayout(event)} name="clear">Clear</button>
		</section>
		{adminPage === "addProduct" && <AddProduct /> }
		{adminPage === "productList" &&<AdminProductList /> }
		{adminPage === "userMessages" && <GetUserMessages /> }
	</>
	);
}

export default AdminPageLayout;