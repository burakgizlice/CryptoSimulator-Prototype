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
               
        public string? CoinImageURL { get; set; }
        public string? CoinName { get; set; }
        public string? CoinSymbol { get; set; }

    }
   
}
