using System.ComponentModel.DataAnnotations;

namespace webapi.Models
{
    public class User
    {
        [Key] public int UserId { get; set; }
        public string? UserName { get; set; }
        public double Balance {  get; set; }
    }
}
