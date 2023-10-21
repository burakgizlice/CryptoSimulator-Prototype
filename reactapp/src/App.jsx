import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import MainPage from "./pages/MainPage/Index.jsx";

const App = () => {
	const [coins, setCoins] = useState([{}, {}]);
	useEffect(() => {
		const makeRequest = async () => {
			await axios
				.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en")
				.then((res) => {
					setCoins(res.data);
					console.log("API Call Made!");
				})
				.catch((err) => console.log(err));
		};
		makeRequest();
	}, []);
	return (
		<div>
			<MainPage coins={coins} />
		</div>
	);
};

export default App;
