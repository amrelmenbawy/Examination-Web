using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TakeExam.DTO;
using TakeExam.Models;

namespace TakeExam.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
      
        private readonly RoleManager<IdentityRole> roleManager;

        public RoleController(RoleManager<IdentityRole> roleManager)
        {
            this.roleManager = roleManager;
        }
        [HttpPost("registerrole")]
        public async Task<IActionResult> Register(string id , string name)
        {
            if (ModelState.IsValid)
            {
                IdentityRole userRole = new IdentityRole();
                userRole.Id =id;
                userRole.Name = name;
                await roleManager.CreateAsync(userRole);
                IdentityResult result = await roleManager.CreateAsync(userRole);
                if (result.Succeeded)
                {
                    return Ok("Succssed Create");
                }
                else
                {
                    return BadRequest(result.Errors.First());
                }
            }
            return BadRequest(ModelState);
        }
       
    }
}
