import React from "react";
import Navbar from "../../../common/Navbar/Index";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Styles.scss";
import AssetCard from "./components/assetCard/Index.jsx";

const Index = ({ coins = [] }) => {
	// STATES
	const [balance, setBalance] = useState("Loading...");
	const [assets, setAssets] = useState([{}]);
	// GETTER METHODS
	const getBalance = async () => {
		await axios
			.get("/api/GetCurrentBalance") //
			.then((res) => setBalance(res?.data.toFixed(3)))
			.catch((err) => console.log(err));
	};
	const getAssets = async () => {
		await axios
			.get("/api/BringAssets") //
			.then((res) => setAssets(res.data))
			.catch((err) => console.log(err));
	};
	// ON MOUNT
	useEffect(() => {
		getBalance();
		getAssets();
	}, []);
	return (
		<div className="assetPage">
			<Navbar balance={balance} />
			<h1 className="title">Currently Owned Assets</h1>
			<div className="assetLayout">
				{assets.map((item, index) => (
					<AssetCard
						coins={coins}
						key={index}
						asset={item}
					/>
				))}
			</div>
		</div>
	);
};

export default Index;
