import React, {useState, useEffect, useRef} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "./normalize.min.css";
import "./index.css";

import LandingPageLayout from "./pages/landingPage/LandingPageLayout";
import ShopPageLayout from "./pages/shopPage/shopPageLayout";
import AdminPageLayout from "./pages/adminPage/AdminPageLayout";
import ProductPageLayout from "./pages/productPage/ProductPageLayout";
import Cart from "./pages/cart/Cart";
import Auth from "./pages/authenticationPage/Auth";
import AccountPage from "./pages/accountPage/AccountPage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";

import debounce from "./logic/functions/debounceFunction";

import {AuthContext, ScreenResizeContext} from "./context/context";

function App() {
	const auth = getAuth();
	const [isUser, setIsUser] = useState(false);
	const [width, setWidth] = useState(window.innerWidth)
	useEffect(() =>{
		window.addEventListener("resize", debounce(() => setWidth(window.innerWidth) ,350, false), false);

		onAuthStateChanged(auth, (user) => {
			if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user;
				setIsUser(uid);
			// ...
			} else {
			// User is signed out
				setIsUser(false);
			}
		});
	}, []);
	return (
		<AuthContext.Provider value={{isUser, setIsUser, auth}}>
			<ScreenResizeContext.Provider value={{width}}>
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
						<Route exact path="/auth" element={
							<Auth />
						} />
						<Route exact path="/account" element={
							<AccountPage />
						} />
						<Route exact path="/checkout" element={
							<CheckoutPage />
						} />
					</Routes>
				</Router>
			</ScreenResizeContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;