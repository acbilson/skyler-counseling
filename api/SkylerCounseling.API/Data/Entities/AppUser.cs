using Microsoft.AspNetCore.Identity;

namespace SkylerCounseling.API.Data.Entities
{
    public class AppUser : IdentityUser
    {
        // Add custom user properties here
        public required string FirstName { get; init; }
        public required string LastName { get; init; }
        // Add more properties as needed
    }
}
