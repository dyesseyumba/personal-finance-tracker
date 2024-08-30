using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace FinanceTrackerAPI.Models
{
    public class User : IdentityUser
    {
        public string? RefreshToken { get; set; }
        public DateTime? RefreshTokenExpiryTime { get; set; }
                public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();

        public ICollection<Account> Accounts { get; set; } = new List<Account>();

        public ICollection<Budget> Budgets { get; set; } = new List<Budget>();
    }
}
