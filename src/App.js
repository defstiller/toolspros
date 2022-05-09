import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./normalize.min.css";
import "./index.css";

import LandingPageLayout from "./pages/landingPage/LandingPageLayout";
import ShopPageLayout from "./pages/shopPage/shopPageLayout";
import AdminPageLayout from "./pages/adminPage/AdminPageLayout";
import ProductPageLayout from "./pages/productPage/ProductPageLayout";

import {cartDataContext} from "./context/context";

function App() {
	const [isCartData, setIsCartData] = useState([]);
	return (
		<cartDataContext.Provider value={{isCartData, setIsCartData}}>
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
				</Routes>
			</Router>
		</cartDataContext.Provider>

	)
}

export default App;