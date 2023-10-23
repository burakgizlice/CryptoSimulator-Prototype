using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    public class User
    {       
        public int UserId { get; set; }
        public string? UserName { get; set; }
        public double Balance { get; set; }

        public virtual ICollection<UserAsset> UserAssets { get; set; }

        
    }
}
