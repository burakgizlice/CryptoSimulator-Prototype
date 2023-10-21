import React from "react";
import "./Styles.scss";
import { AiOutlineMenu } from "react-icons/ai";

const Index = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<h1>Crypto Simulator</h1>
			</div>
			<div className="menu">
				<h3 className="text">Balance:</h3>
				<h3 className="balance">$1000</h3>
				<AiOutlineMenu className="icon" />
			</div>
		</div>
	);
};

export default Index;
