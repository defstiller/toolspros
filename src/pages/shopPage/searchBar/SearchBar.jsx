import React from "react";

import classes from "./searchBar.module.css";

function SearchBar() {

	return(
		<div className={classes.searchBarDiv}>
			<h1>Best products on the market</h1>
			<form>
				<input type="search" placeholder="Search..."/>
				<button type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

export default SearchBar;