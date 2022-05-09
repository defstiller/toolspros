import React from "react";

import GetProduct from "./getProduct/GetProduct";
import AddProduct from "./addProduct/AddProduct";
function AdminPageLayout() {

	return (<>
		<AddProduct />
		<GetProduct />
	</>
	);
}

export default AdminPageLayout;