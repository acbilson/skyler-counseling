using Microsoft.AspNetCore.Identity;

namespace SkylerCounseling.API.Data.Entities
{
    public class AppUser : IdentityUser
    {
        // Add custom user properties here
        public string FirstName { get; set; }
        public string LastName { get; set; }
        // Add more properties as needed
    }
}
