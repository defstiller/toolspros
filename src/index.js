import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./normalize.min.css";
import "./index.css";

import LandingPageLayout from "./layouts/landingPage/LandingPageLayout";
import ShopPageLayout from "./layouts/shopPage/shopPageLayout";
import AdminPageLayout from "./layouts/adminPage/AdminPageLayout";
import ProductInfoPageLayout from "./layouts/productInfoPage/ProductInfoPageLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				
				<Route exact path="/" element={
					<LandingPageLayout /> 
				} />

				<Route exact path="/shop" element={
					<ShopPageLayout />
				} />

				<Route path="/shop/:id" element={
					<ProductInfoPageLayout />
				} />

				<Route exact path="/admin" element={
					<AdminPageLayout />
				} />
			</Routes>
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();