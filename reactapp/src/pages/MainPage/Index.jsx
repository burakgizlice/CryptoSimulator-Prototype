import React, { useEffect, useState } from "react";
import CoinTable from "./components/CoinTable/Index.jsx";
import Navbar from "../../common/Navbar/Index.jsx";
import axios from "axios";

const Index = ({ coins = [] }) => {
	const [balance, setBalance] = useState("Loading...");
	const getBalance = async () => {
		await axios
			.get("/api/GetCurrentBalance") //
			.then((res) => setBalance(res?.data.toFixed(3)))
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getBalance();
	}, []);

	return (
		<div className="mainPage">
			<Navbar balance={balance} />
			<CoinTable
				balance={balance}
				coins={coins}
				updateBalance={getBalance}
			/>
		</div>
	);
};

export default Index;
