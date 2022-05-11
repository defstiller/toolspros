import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./normalize.min.css";
import "./index.css";

import LandingPageLayout from "./pages/landingPage/LandingPageLayout";
import ShopPageLayout from "./pages/shopPage/shopPageLayout";
import AdminPageLayout from "./pages/adminPage/AdminPageLayout";
import ProductPageLayout from "./pages/productPage/ProductPageLayout";
import Cart from "./pages/cart/Cart";

function App() {
	return (
		<Router>
			<Routes>
						
				<Route exact path="/" element={
					<LandingPageLayout /> 
				} />

				<Route exact path="/shop" element={
					<ShopPageLayout />
				} />

				<Route path="/shop/:id" element={
					<ProductPageLayout />
				} />

				<Route exact path="/admin" element={
					<AdminPageLayout />
				} />
				<Route exact path="/cart" element={
					<Cart />
				} />
			</Routes>
		</Router>

	);
}

export default App;