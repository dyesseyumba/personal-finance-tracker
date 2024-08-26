using System.ComponentModel.DataAnnotations;

namespace FinanceTrackerAPI.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public required string Email { get; set; }

        [Required]
        public required string Username { get; set; }

        [Required]
        public required string PasswordHash { get; set; }

        public ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();

        public ICollection<Account> Accounts { get; set; } = new List<Account>();

        public ICollection<Budget> Budgets { get; set; } = new List<Budget>();
    }
}
