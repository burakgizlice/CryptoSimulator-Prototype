import React from "react";
import CoinTable from "./components/CoinTable/Index.jsx";

const Index = ({ coins = [] }) => {
	return (
		<div className="mainPage">
			<CoinTable coins={coins} />
		</div>
	);
};

export default Index;
