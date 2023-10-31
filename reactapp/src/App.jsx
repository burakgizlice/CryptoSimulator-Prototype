import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import MainPage from "./pages/MainPage/Index.jsx";
import CurrentAssets from "./pages/MyAccount/CurrentAssets";
import ProfitLoss from "./pages/MyAccount/ProfitLoss";
import TransactionHistory from "./pages/MyAccount/TransactionHistory";
import { Route, Routes } from "react-router-dom";

const API_SECOND_LIMIT = 60;

const App = () => {
	const [coins, setCoins] = useState([{}, {}]);
	//Function to get Coins
	const makeRequest = async () => {
		await axios
			.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en")
			.then((res) => {
				setCoins(res.data);
				localStorage.setItem("coins", JSON.stringify(res.data));
				localStorage.setItem("lastRequestTime", Date.now());
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		// API Rate Limit Logic
		const lastRequestTime = localStorage.getItem("lastRequestTime");
		const currentTime = Date.now();

		if (!lastRequestTime || currentTime - lastRequestTime > API_SECOND_LIMIT * 1000) {
			makeRequest();
			console.log("getting coins");
		} else {
			setCoins(JSON.parse(localStorage.getItem("coins")));
			console.log("api limit exceeded, retrieving coins from localstorage");
		}
	}, []);

	return (
		<Routes>
			<Route
				path="/"
				element={<MainPage coins={coins} />}
			/>
			<Route
				path="/myAccount/assets"
				element={<CurrentAssets />}
			/>
			<Route
				path="/myAccount/transactionHistory"
				element={<TransactionHistory />}
			/>
			<Route
				path="/myAccount/profitAndLoss"
				element={<ProfitLoss />}
			/>
		</Routes>
	);
};

export default App;
