namespace webapi.Models
{
    public class TranscationResult
    {
        public int TransactionId { get; internal set; }
        public string? CoinCode { get; set; }
        public double Amount { get; set; }
        public double PricePerCoin { get; set; }
        public DateTime TransactionTime { get; set; }
        public string? CoinImageUrl { get; set; }

        public string? TransactionType { get; set; }
    }
}