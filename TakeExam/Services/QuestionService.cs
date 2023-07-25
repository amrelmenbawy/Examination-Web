using TakeExam.Models;
using Microsoft.EntityFrameworkCore;
namespace TakeExam.Services
{
    public class QuestionService:IEntity<Question>
    {
        TakeExamContext db;
        public QuestionService(TakeExamContext db)
        {
            this.db = db;   
        }
        public List<Question> Getall()
        { 
           return db.Questions.ToList();    
        }
        public Question GetByID(int id) 
        {
            return db.Questions.FirstOrDefault(q=>q.Id==id);
        }
        public Question Add(Question q) 
        {
            db.Questions.Add(q);    
            db.SaveChanges();   
            return q;
        }
        public Question Update(int id,Question q) 
        {
            var old = GetByID(id);
            if(old != null) 
            {
                old.Head=q.Head;    
                old.Body = q.Body;
                old.a = q.a;
                old.b = q.b;
                old.c = q.c;
                old.d = q.d;
                old.CorrectAns =q.CorrectAns;   
               db.Questions.Update(old);
               db.SaveChanges();
            return old;
            }
            return null;
        }
        public Question Delete(int id) 
        {
            Question q = db.Questions.FirstOrDefault(q => q.Id == id);
            if (q != null)
            {
                db.Questions.Remove(q); 
                db.SaveChanges();
                return q;
            }
            return null;
        }
    }
}
