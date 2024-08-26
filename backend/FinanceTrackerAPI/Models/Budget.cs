using System.ComponentModel.DataAnnotations;

namespace FinanceTrackerAPI.Models
{
    public class Budget
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int Month { get; set; }

        [Required]
        public int Year { get; set; }

        [Required]
        public decimal TotalBudget { get; set; }

        public int UserId { get; set; }
        public required User User { get; set; }

    }
}
