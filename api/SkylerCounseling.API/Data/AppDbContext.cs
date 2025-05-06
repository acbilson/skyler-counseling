using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SkylerCounseling.API.Data.Entities;

namespace SkylerCounseling.API.Data
{
    public class AppDbContext : IdentityDbContext<AppUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        { }

		  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		  {
				if (!optionsBuilder.IsConfigured)
				{
					 optionsBuilder.UseSqlite("Filename=SkylerCounseling.db");
				}
		  }

        // Define your DbSets here
        //public DbSet<AppUser> Users { get; set; }
		  public DbSet<AppText> AppTexts { get; set; }
        // public DbSet<Appointment> Appointments { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Configure your entity relationships and constraints here

				builder.Entity<AppText>(entity => {
						entity.ToTable("AppTexts");
						entity.HasKey(e => e.Id);

						});
        }
    }
}
