using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    public class UserAsset
    {
        [Key, Column(Order = 0)]
        public int UserAssetId { get; set; }

        public string? CoinCode { get; set; }
    
        public double Amount { get; set; }
        
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public required virtual User User { get; set; } // Navigation property to the User table
        public virtual ICollection<CoinPurchaseRequest> CoinPurchaseRequests { get; set; } = new List<CoinPurchaseRequest>();
        public UserAsset()
        {
            User = new User();
        }
    }
   
}
