import React, { useEffect, useState } from "react";
import "./Styles.scss";
import axios from "axios";

const Index = ({ coins = [] }) => {
	const [indexList, setIndexList] = useState([]);
	const [currentAmounts, setCurrentAmounts] = useState({});

	// useEffect(() => {
	// 	const bringAssets = async () => {
	// 		await axios
	// 			.get("api/Balance?id=1") //
	// 			.then((res) => {
	// 				console.log(res);
	// 			})
	// 			.catch((err) => {
	// 				console.log("USERASSEET" + err);
	// 			});
	// 	};

	// 	bringAssets();
	// }, []);

	const handleClick = (index) => {
		const tmpArray = [...indexList];
		if (indexList.includes(index)) {
			tmpArray.splice(tmpArray.indexOf(index), 1);
			setIndexList([...tmpArray]);
		} else {
			setIndexList([...indexList, index]);
		}
	};

	return (
		<div className="CoinTable">
			<div className="row">
				<h3>#</h3>
				<h3>Coin</h3>
				<h3>Price</h3>
				<h3>1h</h3>
				<h3>24h</h3>
				<h3>7d</h3>
				<h3>24h Volume</h3>
				<h3>Mkt Cap</h3>
			</div>
			{coins.map((coin, index) => (
				<>
					<div
						className="row"
						key={index}
						onClick={() => handleClick(index)}>
						{/* rank */}
						<h3 className="rank">{index + 1}</h3>
						{/* coin symbol */}
						<div className="coinSign">
							<img
								style={{ width: "30px" }}
								onError={(e) => {
									e.target.src = "/vite.svg";
								}}
								src={coin?.image}
							/>
							<h3 className="name">{coin?.name}</h3>
							<p className="text">{coin?.symbol?.toUpperCase()}</p>
						</div>
						{/* price */}
						<p className="text">${coin?.current_price?.toLocaleString()}</p>
						{/* 1h */}
						<p className={`text ${coin?.price_change_percentage_1h_in_currency > 0 ? "positive" : "negative"}`}>{coin?.price_change_percentage_1h_in_currency?.toFixed(2)?.toLocaleString()}%</p>
						{/* 24h */}
						<p className={`text ${coin?.price_change_percentage_24h_in_currency > 0 ? "positive" : "negative"}`}>{coin?.price_change_percentage_24h_in_currency?.toFixed(2)?.toLocaleString()}%</p>
						{/* 7d */}
						<p className={`text ${coin?.price_change_percentage_7d_in_currency > 0 ? "positive" : "negative"}`}>{coin?.price_change_percentage_7d_in_currency?.toFixed(2)?.toLocaleString()}%</p>
						{/* 24h Volume */}
						<p className="text">${coin?.total_volume?.toLocaleString()}</p>
						{/* Mkt Cap */}
						<p className="text">${coin?.market_cap?.toLocaleString()}</p>
					</div>
					<div className={`popDown ${indexList.includes(index) ? "active" : ""}`}>
						<div className="current">
							<h3>IN WALLET</h3>
							{/* When the BringAssets works add it here */}
							<h4>0 {`${coin?.symbol?.toUpperCase()}s`}</h4>
							<h5>(Worth: 0 USD)</h5>
						</div>
						<div className="converter">
							<div className="input">
								<h3>{coin?.symbol?.toUpperCase()}</h3>
								<input placeholder="1"></input>{" "}
							</div>
							<div className="input">
								<h3>USD</h3>
								<input placeholder={coin?.current_price?.toLocaleString()}></input>{" "}
							</div>
						</div>
						<div className="buttons">
							<button className="buy">BUY</button>
							<button className="sell">SELL</button>
						</div>
					</div>
				</>
			))}
		</div>
	);
};

export default Index;
