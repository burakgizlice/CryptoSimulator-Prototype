import React from "react";
import { useEffect } from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const App = () => {
	useEffect(() => {
		const makeRequest = async () => {
			await axios
				.get("api/User") //
				.then((res) => console.log("LIL BRO SAYS HI!\n", res.data))
				.catch((err) => console.log(err));
		};
		makeRequest();
	}, []);
	return <div>App</div>;
};

export default App;
