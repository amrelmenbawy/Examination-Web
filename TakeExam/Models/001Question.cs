using System.ComponentModel.DataAnnotations;

namespace TakeExam.Models
{
    public class Question
    {
        public int Id { get; set;}
        [Required]
        public string Head { get; set;}
        [Required]
        public string Body { get; set;}
        [Required]
        public string a { get; set;}
        [Required]
        public string b { get; set; }
        public string c { get; set; }
        public string d { get; set; }
        [Required]
        public char CorrectAns {get; set;}  
       

    }
}
