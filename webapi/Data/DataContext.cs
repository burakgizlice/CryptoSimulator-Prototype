using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Data
{
    public class DataContext : DbContext
    {
       

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<UserAsset> userAssets { get; set; }
        public DbSet<CoinPurchaseRequest> coinPurchaseRequests { get; set; }

        


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //Configure relationships

            modelBuilder.Entity<UserAsset>()
            .HasKey(ua => new { ua.UserId, ua.CoinCode });

            modelBuilder.Entity<User>()
            .HasMany(u => u.UserAssets)
            .WithOne(ua => ua.User)
            .HasForeignKey(ua => ua.UserId)
            .OnDelete(DeleteBehavior.Restrict);

            
            
        }
    }
}
