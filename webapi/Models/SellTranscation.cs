using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    public class SellTranscation
    {
        [Key] public int TranscationId { get; set;}
        
        public string? CoinCode { get; set;}
        public double Amount { get; set;}
        public double PricePerCoin { get; set;}
        public DateTime TranscationTime { get; set;}
        public string? CoinImageURl { get; set;}
    }
}
