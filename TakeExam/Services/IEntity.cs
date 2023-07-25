using TakeExam.Models;

namespace TakeExam.Services
{
    public interface IEntity<T>
    {
        public List<T> Getall();

        public T GetByID(int id);

        public T Add(T v);

        public T Update(int id, T v);

        public T Delete(int id);
        
        
        
    }
}
