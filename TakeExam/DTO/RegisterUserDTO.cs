using System.ComponentModel.DataAnnotations;

namespace TakeExam.DTO
{
    public class RegisterUserDTO
    {
        [Required]
        public string username { get; set; }
        public string password { get; set; }
        // you can make property for confirm Password here
        public string email { get; set; }
    }
}
