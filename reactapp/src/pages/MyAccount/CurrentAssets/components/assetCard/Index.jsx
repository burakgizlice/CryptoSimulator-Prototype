import React, { useEffect } from "react";
import "./Styles.scss";

const Index = ({ asset, coins }) => {
	const currentPrice = coins.filter((item) => {
		return item?.id == asset?.coinCode;
	})[0]?.current_price;
	if (asset?.amount > 0)
		return (
			<div className="AssetCard">
				<img src={asset?.coinImageURL ?? "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"}></img>
				<h1>{asset.coinName}</h1>
				<h2>{asset.coinSymbol}</h2>
				<h3>IN WALLET</h3>
				<h4>
					{asset?.amount?.toLocaleString()} {asset?.coinSymbol ?? "BTC"}s
				</h4>
				<h5>(Worth: {(asset?.amount * currentPrice).toLocaleString()} USD)</h5>
			</div>
		);
};

export default Index;
