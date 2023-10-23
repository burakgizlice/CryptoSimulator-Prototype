using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    public class CoinPurchaseRequest
    {
        [Key]
        
        public int CoinPurchaseRequestId { get; set; }
        [ForeignKey("UserId")]
        public int UserId { get; set; }
       
        public  string? CoinCode { get; set; }
        
        public double Amount { get; set; }
        public double CurrentPrice { get; set; }
        public DateTime PurchaseDateTime { get; set; }
               
    }
}
