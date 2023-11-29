import React, { useEffect, useState } from "react";
import "./Styles.scss";
import axios from "axios";

const Index = ({ coinSymbol, currentPrice, coinCode, url, updateBalance, balance }) => {
	// STATES
	const [usd, setUSD] = useState(currentPrice);
	const [coin, setCoin] = useState(1);
	const [inWallet, setInWallet] = useState(0);

	// HANDLING INPUTS
	const handleUSDInput = (e) => {
		setUSD(e.target.value);
		setCoin(e.target.value / currentPrice);
	};
	const handleCoinInput = (e) => {
		setCoin(e.target.value);
		setUSD((e.target.value * currentPrice).toLocaleString());
	};
	const handleUSDMax = () => {
		setUSD(balance);
		setCoin(balance / currentPrice);
	};
	const handleCoinMax = () => {
		setCoin(inWallet);
		setUSD(inWallet * currentPrice);
	};
	const resetValues = () => {
		setCoin(0);
		setUSD(0);
	};

	// BALANCE IN WALLET
	const bringInWallet = async () => {
		// ISSUE WITH THE API, IT IS AN ARRAY
		await axios
			.get(`/api/UserAsset/${coinCode}`)
			.then((res) => setInWallet(res?.data[0]?.amount)) //
			.catch((err) => console.log("coin not owned"));
	};
	useEffect(() => {
		bringInWallet();
	}, []);

	// BUTTON FUNCTIONALITY
	const buyCoin = async () => {
		if (coin == 0 || usd == 0) {
			alert("Please enter a valid amount.");
			return;
		}
		await axios
			.post("/api/BuyCoin", {
				coinCode: coinCode,
				amount: coin,
				pricePerCoin: currentPrice,
				coinImageURL: url,
			})
			.then(() => {
				bringInWallet();
				resetValues();
				updateBalance();
				alert("Success! Transaction is done.");
			}) //
			.catch((res) => alert(res.response.data.message));
	};

	const sellCoin = async () => {
		if (coin == 0 || usd == 0) {
			alert("Please enter a valid amount.");
			return;
		}
		await axios
			.post("/api/SellCoin", {
				coinCode: coinCode,
				amount: coin,
				pricePerCoin: currentPrice,
				coinImageURL: url,
			})
			.then(() => {
				bringInWallet();
				resetValues();
				updateBalance();
				alert("Success! Transaction is done.");
			}) //
			.catch((res) => alert(res.response.data.message));
	};

	return (
		<div className="popDown active">
			<div className="current">
				<h3>IN WALLET</h3>
				{/* When the BringAssets works add it here */}
				<h4>
					{inWallet} {`${coinSymbol}s`}
				</h4>
				<h5>(Worth: {(inWallet * currentPrice).toLocaleString()} USD)</h5>
			</div>
			<div className="converter">
				<div className="input">
					<h3>{coinSymbol}</h3>
					<input
						value={coin}
						onFocus={(e) => (e.target.value = "")}
						onChange={(e) => handleCoinInput(e)}></input>
				</div>
				<div className="input">
					<h3>USD</h3>
					<input
						value={usd}
						onFocus={(e) => (e.target.value = "")}
						onChange={(e) => handleUSDInput(e)}></input>
				</div>
			</div>
			<div className="buttons">
				<button
					className="max"
					onClick={() => handleCoinMax()}>
					Max
				</button>
				<button
					className="max"
					onClick={() => handleUSDMax()}>
					Max
				</button>
			</div>
			<div className="buttons">
				<button
					className="buy"
					onClick={() => buyCoin()}>
					BUY
				</button>
				<button
					className="sell"
					onClick={() => sellCoin()}>
					SELL
				</button>
			</div>
		</div>
	);
};

export default Index;
