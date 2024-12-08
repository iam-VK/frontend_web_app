import React from "react";
import Header from "../../components/TitleBanner/TitleBanner";
import SearchFunc from "../../components/SearchFunc/SearchFunc";
import "./SearchPage.css";
const SearchPage = () => {
	return (
		<div className="search-root">
			SearchPage
			<div className="appcontent">
				{/* <Header subtitle={"Find your data in seconds"} /> */}
				<SearchFunc />
			</div>
		</div>
	);
};

export default SearchPage;
