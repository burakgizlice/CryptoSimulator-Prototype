import React, { useEffect, useState } from "react";
import "./Styles.scss";
import { AiOutlineMenu } from "react-icons/ai";
import SideMenu from "./components/SideMenu.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Index = () => {
	const nav = useNavigate();
	const [sideMenuAnchor, setSideMenuAnchor] = useState(false);
	const [balance, setBalance] = useState("Loading...");
	useEffect(() => {
		const getBalance = async () => {
			axios
				.get("/api/GetCurrentBalance") //
				.then((res) => setBalance(res.data))
				.catch((err) => console.log(err));
		};
		getBalance();
	}, []);
	return (
		<div className="navbar">
			<SideMenu
				balance={balance}
				active={sideMenuAnchor}
				Deactivate={() => setSideMenuAnchor(false)}
			/>
			<div
				onClick={() => nav("/")}
				className="logo">
				<h1>Crypto Simulator</h1>
			</div>
			<div className="menu">
				<h3 className="text">Balance:</h3>
				<h3 className="balance">${balance}</h3>
				<AiOutlineMenu
					className="icon"
					onClick={() => {
						setSideMenuAnchor(true);
					}}
				/>
			</div>
		</div>
	);
};

export default Index;
