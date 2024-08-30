using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace FinanceTrackerAPI.Models.Web
{
    public class RegisterUserModel
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
