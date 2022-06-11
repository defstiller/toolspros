import React, {useState, useEffect} from "react";
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
import ContactPage from "./pages/contactPage/ContactPage";
import About from "./pages/aboutPage/About";

import debounce from "./logic/functions/debounceFunction";

import {AuthContext, ScreenResizeContext} from "./context/context";

function App() {
	const auth = getAuth();
	const [isUser, setIsUser] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() =>{
		window.addEventListener("resize", debounce(() => setWidth(window.innerWidth) ,250, false), false);

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
						<Route exact path="/toolspros" element={ //for gh pages
							<LandingPageLayout /> 
						} />

						<Route exact path="/toolspros/shop" element={
							<ShopPageLayout />
						} />

						<Route path="/toolspros/shop/:id" element={
							<ProductPageLayout />
						} />

						<Route exact path="/toolspros/admin" element={
							<AdminPageLayout />
						} />
						<Route exact path="/toolspros/cart" element={
							<Cart />
						} />
						<Route exact path="/toolspros/auth" element={
							<Auth />
						} />
						<Route exact path="/toolspros/account" element={
							<AccountPage />
						} />
						<Route exact path="/toolspros/checkout" element={
							<CheckoutPage />
						} />
						<Route exact path="/toolspros/contact" element={
							<ContactPage />
						} />
						<Route exact path="/toolspros/about" element={
							<About />
						} />
					</Routes>
				</Router>
			</ScreenResizeContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;