import React from "react";
import Header from "../../components/header/Header";
import SearchFunc from "../../components/SearchFunc/SearchFunc";
import "./SearchPage.css";
const SearchPage = () => {
	return (
		<div className="search-root">
			SearchPage
			<div className="appcontent">
				{/* <Header subtitle={"Find your data in seconds"} /> */}
				<SearchFunc path={"search/"} />
			</div>
		</div>
	);
};

export default SearchPage;
