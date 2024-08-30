using System.ComponentModel.DataAnnotations;

namespace FinanceTrackerAPI.Models
{
    public class Transaction : ModelBase
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public required string Description { get; set; }

        [Required]
        public decimal Amount { get; set; }

        [Required]
        public DateTime Date { get; set; }

        public int UserId { get; set; }
        public required User User { get; set; }

        public int AccountId { get; set; }

        public int TransactionTypeId { get; set; }

        public TransactionType? TransactionType { get; set; }

        public Account? Account { get; set; }
    }
}
