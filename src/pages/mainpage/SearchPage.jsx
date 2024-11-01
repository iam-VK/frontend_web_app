import React from "react";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";
import "./SearchPage.css";
const SearchPage = () => {
	return (
		<div className="search-root">
			SearchPage
			<div className="appcontent">
				<Header subtitle={"Find your data in seconds"} />
				<Body path={"search/"} />
			</div>
		</div>
	);
};

export default SearchPage;
