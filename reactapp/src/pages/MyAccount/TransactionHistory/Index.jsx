import React, { useEffect, useState } from "react";
import Navbar from "../../../common/Navbar/Index";
import "./Styles.scss";
import axios from "axios";
import TransactionsTable from "./components/TransactionTable/Index";

const Index = () => {
	// STATEs
	const [balance, setBalance] = useState(0);
	const [transactions, setTransactions] = useState([]);
	// GETTER METHODS
	const getBalance = async () => {
		await axios
			.get("/api/GetCurrentBalance") //
			.then((res) => setBalance(res?.data.toFixed(3)))
			.catch((err) => console.log(err));
	};
	const getTransactions = async () => {
		await axios
			.get("/api/BringTranscationHistory") //
			.then((res) => setTransactions(res.data))
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getBalance();
		getTransactions();
	}, []);
	return (
		<div className="TransactionPage">
			<Navbar balance={balance} />
			<h1 className="title">Transaction History</h1>
			<TransactionsTable transactions={transactions} />
		</div>
	);
};

export default Index;
