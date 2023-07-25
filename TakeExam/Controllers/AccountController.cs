using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Timers;
using TakeExam.DTO;
using TakeExam.Models;

namespace TakeExam.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> usermanger;
        private readonly RoleManager<IdentityRole> roleManager;

        public AccountController(UserManager<ApplicationUser> usermanger ,RoleManager<IdentityRole> roleManager)
        {
            this.usermanger = usermanger;
            this.roleManager = roleManager;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterUserDTO userDTO)
        {
            if(ModelState.IsValid)
            {
                ApplicationUser userModle = new();
                userModle.UserName = userDTO.username;
                userModle.Email = userDTO.email;
                IdentityResult result = await usermanger.CreateAsync(userModle , userDTO.password);
                if (result.Succeeded)
                {
                    //await usermanger.AddToRoleAsync(userModle, "Admin");
                    return Ok("Succssed Create");
                }
                else
                {
                    return BadRequest(result.Errors.First());
                }
            }
            return BadRequest(ModelState);
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDTO userDTO)
        {
            if (ModelState.IsValid)
            {
               ApplicationUser userModel = await usermanger.FindByNameAsync(userDTO.username);
                if(userModel != null && await usermanger.CheckPasswordAsync(userModel,userDTO.password))
                {
                    List<Claim> myclaims = new List<Claim>();
                    myclaims.Add(new Claim(ClaimTypes.NameIdentifier, userModel.Id));
                    myclaims.Add(new Claim(ClaimTypes.Name, userModel.UserName));
                    myclaims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
                    var roles = await usermanger.GetRolesAsync(userModel);
                    if(roles !=null)
                    {
                        foreach (var item in roles)
                        {
                            myclaims.Add(new Claim(ClaimTypes.Role, item));
                        }
                    }
                    var authsecritykey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("amrahmedelmenbawy#amr&&Ahmed&&Ismlam12358"));
                    SigningCredentials Credentials = new SigningCredentials(authsecritykey,SecurityAlgorithms.HmacSha256);
                     JwtSecurityToken mytoken =new JwtSecurityToken(
                        issuer: "http://localhost:51352",
                        audience: "http://localhost:4200",
                        expires: DateTime.Now.AddDays(20),
                        claims: myclaims,
                        signingCredentials: Credentials
                        );
                    return Ok(new
                    {
                        Token = new JwtSecurityTokenHandler().WriteToken(mytoken),
                        expiration = mytoken.ValidTo,
                        Role = roles
                        
                    }) ;
                }
                else
                {
                    return BadRequest("Invalid Login Account");
                }
            }
            return BadRequest(ModelState);
        }

    }
}
