namespace webapi.Models
{
    public class BuyCoinRequest
    {
        public string? CoinCode { get; set; }
        public double Amount { get; set; }
        public double PricePerCoin { get; set; }
        public string? CoinImageURL { get; set; }

        public string? CoinName { get; set; }
        public string? CoinSymbol { get; set; }
    }
}
