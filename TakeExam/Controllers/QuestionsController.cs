using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TakeExam.Models;
using TakeExam.Services;

namespace TakeExam.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        IEntity<Question> Question_serv;
        public QuestionsController(IEntity<Question> Question_serv)
        {
            this.Question_serv = Question_serv;
        }
        [HttpGet]
       [Authorize]
        public IActionResult Get()
        {
            var AllQ = Question_serv.Getall();
            if (AllQ != null)
            {
                return Ok(AllQ);
            }
            return BadRequest("No Data");
        }

        [HttpGet("{id}")]
       // [Authorize]
        public IActionResult Get(int id) 
        {
            var Q = Question_serv.GetByID(id);
            if (Q != null)
            {
                return Ok(Q);
            }
            return BadRequest("No Data");
        }
        [HttpPost]
        [Authorize(Roles ="Admin")]
        public IActionResult Post(Question q)
        {
            if (ModelState.IsValid)
            {
                Question_serv.Add(q);
                return Ok(q);
            }
            return BadRequest(ModelState);
        }
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public IActionResult Delete(int id) 
        {
           Question q = Question_serv.Delete(id);
            if (q != null)
            {
                return Ok("Deleted");
            }
            return BadRequest("Not Found");
        }
        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public IActionResult Put(int id, Question q) 
        {
            if (ModelState.IsValid)
            {
               var old= Question_serv.Update(id,q);
                if (old != null)
                    return Ok(old);
                else return BadRequest("No update");
            }
            return BadRequest(ModelState);
        }
    }
}
