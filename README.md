# CryptoSimulator-Prototype

We developed a simple crypto currency trading simulator, where a user can have any desired balance. Buy any coin from the top 100 coins, see its' value and keep track of the past transactions. This is the prototype and a warm-up project for the actual one, which will be a full web application. For the sake of simplicity, we used local SQLServer. We run our backend server local, and serve the front end locally.

## Coin API
We used the free public API from [coingecko](https://www.coingecko.com/api/documentation). Due to the request limitations, we store the initial request's data and refresh it accordingly to the time limit. We decided to keep the coin amount at 100 for this prototype version.
## Buy and Sell Actions
The user can buy and sell any coin, see how many of that coin they have in their wallet. Max out the amount of coins they have or the amount of money they have.

![BuySellGif](https://github.com/Downshifter114/CryptoSimulator-Prototype/assets/87895075/5f978d88-9b55-4eb5-ae40-0d5a3957218f)
## User Assets
The user can monitorize which asset they have, what's its' current worth in USD.

![AssetsGif](https://github.com/Downshifter114/CryptoSimulator-Prototype/assets/87895075/2472159d-c5c2-4bcd-a238-f8a9cfa14758)
## Transaction History
The user can view their past transactions, when they happened. What was the coin price when the transaction happened, how much did they pay etc.

![TransactionGif](https://github.com/Downshifter114/CryptoSimulator-Prototype/assets/87895075/3f36baf3-daba-4c3b-b94c-a757637f5296)
## Backend APIs
The list of APIs we crafted and used for this prototype.

![APIsSS](https://github.com/Downshifter114/CryptoSimulator-Prototype/assets/87895075/6f3b42df-0150-41b3-9c50-cc4e5960820e)
# Tech Stack
- ReactJS
- Vite
- .NET webapi
- SQL Server

# Desired Features for the Actual Project
#### The actual app will be a web app unlike this local project, planning to use AWS.
- User Login/Register
- Profit & Loss Page (detailed calculations)
- Multiple Pages of Coins (instead of 100 limited ones)
- Rating Success for each Transaction
