using System.ComponentModel.DataAnnotations;

namespace FinanceTrackerAPI.Models
{
    public class Budget : ModelBase
    {
        [Key]
        public int Id { get; set; }
        public required string Name { get; set; }
        [Required]
        public decimal Amount { get; set; }

        public int UserId { get; set; }
        public User? User { get; set; }

    }
}
