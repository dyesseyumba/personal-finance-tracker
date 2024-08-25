using System.ComponentModel.DataAnnotations;

namespace FinanceTrackerAPI.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public required string Username { get; set; }

        [Required]
        public required string PasswordHash { get; set; }

        // Navigation property to link to transactions
        public ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();
    }
}
