using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Microsoft.EntityFrameworkCore;
using System;

namespace TakeExam.Models
{
    public class TakeExamContext :IdentityDbContext<ApplicationUser>
    { 
        public virtual DbSet<Question> Questions { get; set; }
        public TakeExamContext()
        {

        }
        // injection 
        public TakeExamContext(DbContextOptions<TakeExamContext> options):base(options)  // injection ^^^^hhhh
        {
            
        }


    }
}
