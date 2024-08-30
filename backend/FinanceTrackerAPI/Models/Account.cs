using System.ComponentModel.DataAnnotations;

namespace FinanceTrackerAPI.Models
{
    public class Account : ModelBase
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public required string Name { get; set; }

        [Required]
        public decimal Balance { get; set; }
        public string Currency { get; set; } = "XAF";

        public int UserId { get; set; }
        public User? User { get; set; }
        public ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();
    }
}
