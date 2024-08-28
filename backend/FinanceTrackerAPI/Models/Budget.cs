using System.ComponentModel.DataAnnotations;

namespace FinanceTrackerAPI.Models
{
    public class Budget
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        [Required]
        public decimal Amount { get; set; }

        public int UserId { get; set; }
        public required User User { get; set; }

    }
}
