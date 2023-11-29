import React, { useEffect } from "react";
import "./Styles.scss";
import dayjs from "dayjs";

const Index = ({ transactions }) => {
	return (
		<div className="TransactionTable">
			<div className="row">
				<h3>Coin</h3>
				<h3>Id</h3>
				<h3>Type</h3>
				<h3>Amount</h3>
				<h3>Coin Price</h3>
				<h3>Total USD</h3>
				<h3>Date&Time</h3>
			</div>
			{transactions
				.slice()
				.reverse()
				.map((transaction, index) => (
					<div
						key={index}
						className="row">
						{/* COIN SIGN */}
						<div className="coinSign">
							<img
								style={{ width: "30px" }}
								onError={(e) => {
									e.target.src = "/vite.svg";
								}}
								src={transaction?.coinImageUrl}
							/>
							<h3 className="name">{transaction?.coinName ?? "Bitcoin"}</h3>
							<p className="text">{transaction?.symbol?.toUpperCase() ?? "BTC"}</p>
						</div>
						{/* Transaction Id */}
						<p className="text">{transaction?.transactionId}</p>
						{/* Transaction Type */}
						<p className={`text ${transaction?.transactionType == "Buy" ? "positive" : "negative"}`}>{transaction?.transactionType}</p>
						{/* amount */}
						<p className="text">{transaction?.amount.toFixed(10)}</p>
						{/* Price per coin */}
						<p className="text">{transaction?.pricePerCoin} $</p>
						{/* Total Paid */}
						<p className="text">{(transaction?.amount * transaction?.pricePerCoin).toLocaleString()} $</p>
						{/* Time */}
						<p className="text">{dayjs(transaction?.transactionTime).format("MMMM D, YYYY - HH:mm")}</p>
					</div>
				))}
		</div>
	);
};

export default Index;
