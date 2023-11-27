namespace webapi.Models
{
    public class SellCoinRequest
    {
        public string CoinCode { get; set; }
        public double Amount { get; set; }
        public double PricePerCoin {  get; set; }
        public string CoinImageURl { get; set; }

    }
}
