using Microsoft.AspNetCore.Mvc;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private static List<User> users = new List<User>
        {
            new User {Id = 1,
            Name = "Jayy"},
            new User {Id = 2,
            Name = "Kyle"}

        };

        [HttpGet]
        public List<User> GetUser() { return users; }

    }
}
