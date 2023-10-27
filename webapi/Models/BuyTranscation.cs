using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    public class BuyTranscation
    {

        [Key] public int TranscationId {  get; set; }
        [ForeignKey ("UserId")]public int UserId { get; set; }
        public string? CoinCode { get; set; }
        public double Amount { get; set; }
        public double PricePerCoin { get; set; }
        public DateTime TrascationTime { get; set; }

        public string? CoinImageURL { get; set; }
    }
}
