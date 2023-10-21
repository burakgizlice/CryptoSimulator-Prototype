import React from "react";
import CoinTable from "./components/CoinTable/Index.jsx";
import Navbar from "../../common/Navbar/Index.jsx";

const Index = ({ coins = [] }) => {
	return (
		<div className="mainPage">
			<Navbar />
			<CoinTable coins={coins} />
		</div>
	);
};

export default Index;
