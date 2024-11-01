import React from "react";
import "./HomePage.css";
import Header from "../../components/header/Header";
import Tabs from "../../components/tabs/Tabs";

export default function HomePage() {
	return (
		<>
			<div className="title">
				<Header subtitle={"Local media search made easier"} />
			</div>
			<div className="homepage">
				<Tabs />
			</div>
		</>
	);
}
