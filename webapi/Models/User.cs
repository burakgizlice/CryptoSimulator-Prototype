using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    public class User
    {       
        [Key]  public int UserId { get; set; }
        public string? UserName { get; set; }
        public double Balance { get; set; }

        public required virtual ICollection<UserAsset> UserAssets { get; set; }

        
    }
}
