using System.ComponentModel.DataAnnotations;

namespace FinanceTrackerAPI.Models.Web
{
    public class UpdateUserModel
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        public string? Password { get; set; } // Optional for updates
    }
}
