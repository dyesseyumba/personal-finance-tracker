using System.ComponentModel.DataAnnotations;

namespace FinanceTrackerAPI.Models
{
    public class TransactionType : BaseEntity
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public required string Name { get; set; }

        public ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();

    }
}
