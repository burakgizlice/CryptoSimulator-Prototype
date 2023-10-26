import React, { useState } from "react";
import "./Styles.scss";
import { AiOutlineMenu } from "react-icons/ai";
import SideMenu from "./components/SideMenu.jsx";
import { useNavigate } from "react-router-dom";

const Index = () => {
	const nav = useNavigate();
	const [sideMenuAnchor, setSideMenuAnchor] = useState(false);
	return (
		<div className="navbar">
			<SideMenu
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
				<h3 className="balance">$1000</h3>
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
