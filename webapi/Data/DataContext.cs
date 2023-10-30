using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Data
{
    public class DataContext : DbContext
    {
       

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<UserAsset> userAssets { get; set; }
        public DbSet<User> users { get; set; }
        public DbSet<SellTranscation> sellTranscations { get; set; }      
        public DbSet<BuyTranscation> buyTranscations { get; set; }

        
    }
}
