using System.ComponentModel.DataAnnotations;

namespace FinanceTrackerAPI.Models.Web
{
    public class AssigneModel
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Role { get; set; }
    }
}
