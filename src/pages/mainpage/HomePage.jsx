import React from "react";
import "./HomePage.css";
import Header from "../../components/TitleBanner/TitleBanner";
import Tabs from "../../components/tabs/Tabs";

export default function HomePage() {
	return (
		<>
			<div className="title">
				<Header />
			</div>
			<div className="homepage">
				<Tabs />
			</div>
		</>
	);
}
