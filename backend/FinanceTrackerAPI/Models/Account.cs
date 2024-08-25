using System.ComponentModel.DataAnnotations;

namespace FinanceTrackerAPI.Models
{
    public class Account
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public required string Name { get; set; }

        [Required]
        public decimal Balance { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}
