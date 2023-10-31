import React from "react";
import "./ComponentStyles.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SideMenu = ({ balance, active, Deactivate }) => {
	const nav = useNavigate();
	return (
		<div className={`sideMenu ${active ? "active" : ""}`}>
			<AiOutlineClose
				className="react-icon"
				onClick={() => Deactivate()}
			/>

			<div className="together">
				<h1>My Account:</h1>
				<h3 className="balance">${balance}</h3>
			</div>
			<div className="pages">
				<h2 onClick={() => nav("/myAccount/assets")}>ASSETS</h2>
				<h2 onClick={() => nav("/myAccount/transactionHistory")}>TRANSACTION HISTORY</h2>
				<h2 onClick={() => nav("/myAccount/profitAndLoss")}>PROFIT & LOSS</h2>
			</div>
		</div>
	);
};

export default SideMenu;
