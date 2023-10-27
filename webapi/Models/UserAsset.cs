using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    public class UserAsset
    {
        public int UserAssetId { get; set; }

        public string? CoinCode { get; set; }
    
        public double Amount { get; set; }
        
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public required virtual User User { get; set; } // Navigation property to the User table        
        public string? CoinImageURL { get; set; }
        
    }
   
}
